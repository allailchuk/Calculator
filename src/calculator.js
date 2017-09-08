var Calculator = {
	// Holds expression
	expression: '',

	// Holds memory
	memory: 0,

	events: {
		onExpressionChange: function() {}
	},

	init: function(config) {
		this.events = config && config.events || this.events;
		this.events.onExpressionChange(this.expression);
	},

	// Adds a number or operator
	addExpression: function(chunk) {
		// If chunk is a string - it's an operator like +-/*
		if(typeof chunk == "string") {
			// If it ends with space means it ends with operator
			// need to remove previous operator before adding new one
			if(this.expression[this.expression.length-1] == ' ') {
				// Remove operator from the end of expression
				this.expression = this.expression.slice(0, this.expression.length-3);
			}
			// Add new operator
			chunk = ' ' + chunk + ' ';
		}
		this.expression += chunk;
		this.events.onExpressionChange(this.expression);
	},
	
	// Resets expression
	reset: function() {
		this.expression = '';
		this.events.onExpressionChange(this.expression);
	},

	// Deletes last added number or operator
	delete: function() {
		// If last added was operator
		if(this.expression[this.expression.length-1] == ' ') {
			// Remove 3 symbols
			this.expression = this.expression.slice(0, this.expression.length-3);
		} else {
			this.expression = this.expression.slice(0, this.expression.length-1);
		}
		this.events.onExpressionChange(this.expression);
	},

	// Returns true if expression has only a number
	expressionIsANumber: function() {
		return /^[\d\.]+$/.test(this.expression);
	},

	// Calculates square root
	squareRoot: function() {
		// if expression contains anything rather than a number
		// it's not possible to do sqrt
		if(!this.expressionIsANumber()) {
			return;
		}
		this.expression = Math.sqrt(+this.expression).toString();
		this.events.onExpressionChange(this.expression);
	},

	// Adds current number to memory
	addToMemory: function() {
		// if expression contains anything rather than a number
		// it's not possible to do add to memory
		if(!this.expressionIsANumber()) {
			return;
		}
		this.memory += +this.expression;
	},

	// Gets the number from memory
	getFromMemory: function() {
		this.addExpression(this.memory);
	},

	// Clears memory
	clearMemory: function() {
		this.memory = 0;
	},

	// Does +/- operation
	invert: function() {
		var lastNumber = /([\d\.\-]+)$/.exec(this.expression);
		if(isNaN(lastNumber[0])) {
			return;
		}
		lastNumber = lastNumber[0];
		this.expression = this.expression.slice(0, this.expression.length - lastNumber.length) + (-lastNumber);
		this.events.onExpressionChange(this.expression);
	},

	// Does actual calculation, asynchronously calls callback once done
	compute: function(callback) {
		var self = this;
		setTimeout(function() {
			self.expression = eval(self.expression).toString();
			self.events.onExpressionChange(self.expression);
			callback && callback(self.expression);
		}, 500);
	}
};