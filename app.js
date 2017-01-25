    var firstValue = "";
    var secondValue = "";
    var operator;
    var editedValue;
    var memory = 0;
    var root;
    
   
        function tablo(value) {
           document.getElementsByClassName("display")[0].innerHTML = value; 
        }

        function addValue(value) {
                // checking if operator was not set
            if (!operator) {
                //accumulating values (numbers clicked) into firstValue and converting it into a string
                firstValue += value.toString();
                // showing firstValue on the calculator display
                tablo(firstValue);
            } else {
                secondValue += value.toString();
                tablo(secondValue);
            }
        }
            
        function addOperator(o) {
            if (firstValue !== '' && secondValue !=='' && typeof operator === "string"){
                total();
            }
            operator = o;          
        }

        function total() {            
            if (operator == "+") {
                var total = +firstValue + +secondValue;
            } else if (operator == "-") {
                var total = +firstValue - +secondValue;               
            } else if (operator == "*") {
                var total = +firstValue * +secondValue;                
            } else if (operator == "/") {
                var total = +firstValue / +secondValue;                
            }  
            
            tablo(total);
            firstValue = total.toString();
            secondValue = '';
            operator = undefined;                
        }

        function resetValue() {
            tablo('');
            firstValue = '';
            secondValue = '';
        }

        function deleteSymbol() {
            if (!operator) {
                firstValue = firstValue.slice(0, -1);
                tablo(firstValue);
            } else{
                secondValue = secondValue.slice(0, -1);
                tablo(secondValue);
            }
        }

        function addToMemory() {
            if (!operator) {
                memory += +firstValue;
            } else {
                memory += +secondValue;
            }  

            firstValue = '';
            secondValue = '';
            operator = undefined; 
        }

        function showMemory() {
            if (!operator) {
                firstValue = memory;
            } else {
                secondValue = memory;
            } 

            tablo(memory);
        }

        function clearMemory() {
            memory = 0;     
        }

        function squareRoot() {
            if (!operator) {
                root = Math.sqrt(firstValue);
                firstValue = root;
            } else {
                root = Math.sqrt(secondValue);
                secondValue = root;
            }

            tablo(root);
        } 
        
        document.addEventListener("keypress", keyboardPress);
        
        function keyboardPress(pressed) {
            if (pressed.keyCode == '49') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '50') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '51') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '52') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '53') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '54') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '55') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '56') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '57') {
                addValue(pressed.key);
            } else if (pressed.keyCode == '48') {
                addValue(pressed.key);
            } else if (pressed.key == "+") {
                addOperator(pressed.key);
            } else if (pressed.key == "-") {
                addOperator(pressed.key);
            } else if (pressed.key == "*") {
                addOperator(pressed.key);
            } else if (pressed.key == "/") {
                addOperator(pressed.key);
            } else if (pressed.key == "=") {
                total();
            } 
        }

        document.addEventListener("keydown", deleteOnKeyboard);

        function deleteOnKeyboard (pressed) {
            if (pressed.keyCode == '8') {
                resetValue();
            }
        }






























