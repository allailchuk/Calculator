var currentExpression;

// Initializing calculator
Calculator.init({
	events: {
		onExpressionChange: function(expression) {
			currentExpression = expression;
		}
	}
});

describe('Basic computations - addition, substraction, multiplication and division', function () {
	it('Should compute 2 + 2', function (done) {
		Calculator.addExpression(2);
		Calculator.addExpression('+');
		Calculator.addExpression(2);
		Calculator.compute();
		setTimeout(function() {
			expect(currentExpression).toEqual('4');
			done();
		}, 600);
	});

	it('Should compute 6 - 4', function (done) {
		Calculator.reset();
		Calculator.addExpression(6);
		Calculator.addExpression('-');
		Calculator.addExpression(4);
		Calculator.compute();
		setTimeout(function() {
			expect(currentExpression).toEqual('2');
			done();
		}, 600);
	});

	it('Should compute 5 * 5', function (done) {
		Calculator.reset();
		Calculator.addExpression(5);
		Calculator.addExpression('*');
		Calculator.addExpression(5);
		Calculator.compute();
		setTimeout(function() {
			expect(currentExpression).toEqual('25');
			done();
		}, 600);
	});

	it('Should compute 18 / 2', function (done) {
		Calculator.reset();
		Calculator.addExpression(18);
		Calculator.addExpression('/');
		Calculator.addExpression(2);
		Calculator.compute();
		setTimeout(function() {
			expect(currentExpression).toEqual('9');
			done();
		}, 600);
	});

	it('Should compute 2 * 5 + 4 = * 3', function (done) {
		Calculator.reset();
		Calculator.addExpression(2);
		Calculator.addExpression('*');
		Calculator.addExpression(5);
		Calculator.addExpression('+');
		Calculator.addExpression(4);
		Calculator.compute();
		setTimeout(function() {
			Calculator.addExpression('*');
			Calculator.addExpression(3);
			Calculator.compute();
			setTimeout(function() {
				expect(currentExpression).toEqual('42');
				done();
			}, 600);
		}, 600);
	});


	it('Verifies that compute operation is asyncronous and will not have a result immediately', function (done) {
		Calculator.reset();
		Calculator.addExpression(2);
		Calculator.addExpression('*');
		Calculator.addExpression(5);
		Calculator.compute();
		expect(currentExpression).toEqual('2 * 5');
		done();
	});

	it('Should execute 2 operations and have result in 1 second asyncronously', function (done) {
		Calculator.reset();

		// Making first operation
		Calculator.addExpression(2);
		Calculator.addExpression('*');
		Calculator.addExpression(3);
		Calculator.addExpression('+');
		Calculator.addExpression(4);

		// Compute is asyncronous
		Calculator.compute();

		setTimeout(function() {

			// Doing second operation
			Calculator.addExpression('*');
			Calculator.addExpression(3);

			// Again compute is asynchronous
			Calculator.compute();
			setTimeout(function() {
				// Result
				expect(currentExpression).toEqual('30');
				done();
			}, 600);
		}, 600);
	});

	it('Should verify that 400ms is not enough to compute a result', function (done) {
		Calculator.reset();

		// Making first operation
		Calculator.addExpression(2);
		Calculator.addExpression('*');
		Calculator.addExpression(3);

		// Compute is asyncronous
		Calculator.compute();

		setTimeout(function() {
			// Result
			expect(currentExpression).toEqual('2 * 3');
			done();
		}, 400);
	});



});