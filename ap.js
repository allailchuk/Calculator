    var firstValue = "";
    var secondValue = "";
    var operator;
    var newValue;
            
        function addValue(value) {
            if (typeof operator !== "string"){
                firstValue += value.toString();
                document.getElementsByClassName("display")[0].innerHTML = firstValue;

            } else {
                secondValue += value.toString();
                document.getElementsByClassName("display")[0].innerHTML = secondValue;
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
            
            document.getElementsByClassName("display")[0].innerHTML = total;
            firstValue = total.toString();
            secondValue = '';
            operator = undefined;                
        }


