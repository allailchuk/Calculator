    var firstValue = "";
    var secondValue = "";
    var operator;
    var editedValue;
    var memory = 0;
  
   
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

        function resetValue(){
            tablo('');
            firstValue = '';
            secondValue = '';
        }

        function deleteSymbol(){
            if (!operator) {
                firstValue = firstValue.slice(0, -1);
                tablo(firstValue);
            } else{
                secondValue = secondValue.slice(0, -1);
                tablo(secondValue);
            }
        }

        function addToMemory(){
            if (!operator) {
                memory += +firstValue;
            } else {
                memory += +secondValue;
            }  

            firstValue = '';
            secondValue = '';
            operator = undefined; 
        }

        function showMemory(){
            if (!operator) {
                firstValue = memory;
            } else {
                secondValue = memory;
            } 
              
            tablo(memory);
        }

        function clearMemory(){
            memory = 0;     
        }
































