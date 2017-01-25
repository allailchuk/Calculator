    var firstValue = "";
    var secondValue = "";
    var operator;
    var editedValue;
    var addedToMemory;
    var memory;
  
   
            
        function addValue(value) {
                // checking if operator was not set
            if (typeof operator !== "string"){
                //accumulating values (numbers clicked) into firstValue and converting it into a string
                firstValue += value.toString();
                // showing firstValue on the calculator display
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

        function resetValue(){
            document.getElementsByClassName("display")[0].innerHTML = '';
            firstValue = '';
            secondValue = '';
        }

        function deleteSymbol(){
            if (typeof operator !== "string") {
                document.getElementsByClassName("display")[0].innerHTML = firstValue = firstValue.slice(0, -1);
            } else{
                document.getElementsByClassName("display")[0].innerHTML = secondValue = secondValue.slice(0, -1);
            }
        }

        function addToMemory(){
            if (!memory) {
                memory = firstValue;
                document.getElementsByClassName("display")[0].innerHTML = '';
                firstValue = '';

            }else {
                addedToMemory = firstValue;
                addedToMemory = +memory + +addedToMemory;
                document.getElementsByClassName("display")[0].innerHTML = '';
                firstValue = '';
                memory = addedToMemory;
            }    
        }

        function showMemory(){
        debugger;
            if (addedToMemory) {
                document.getElementsByClassName("display")[0].innerHTML = addedToMemory;
                memory = '';
                addedToMemory = '';
            }else{
                document.getElementsByClassName("display")[0].innerHTML = memory;
                memory = '';
                addedToMemory = '';
            }
        }

        function clearMemory(){
            document.getElementsByClassName("display")[0].innerHTML = '';
            memory = '';
            addedToMemory = '';
            
        }
































