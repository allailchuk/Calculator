$(document).ready(function() {

    // Maps key events to calculator methods
	document.addEventListener("keypress", function(pressed) {
		if(pressed.keyCode == 48 || pressed.keyCode == 49 || pressed.keyCode == 50 || pressed.keyCode == 51
			|| pressed.keyCode == 52 || pressed.keyCode == 53 || pressed.keyCode == 54
			|| pressed.keyCode == 55 || pressed.keyCode == 56 || pressed.keyCode == 57) {
			Calculator.addExpression(+pressed.key);
		} else if (pressed.key == "+") {
			Calculator.addExpression(pressed.key);
		} else if (pressed.key == "-") {
			Calculator.addExpression(pressed.key);
		} else if (pressed.key == "*") {
			Calculator.addExpression(pressed.key);
		} else if (pressed.key == "/") {
			Calculator.addExpression(pressed.key);
		} else if (pressed.key == "=" || pressed.keyCode == 13) {
			Calculator.compute();
		}
	});
	document.addEventListener("keydown", function(pressed) {
		if (pressed.keyCode == '8') {
			Calculator.delete();
		}
	});

	// Initializes calculator
	Calculator.init({
        events: {
            onExpressionChange: function(expression) {
                $('.display').text(expression || 0);
            }
        }
    });
});
