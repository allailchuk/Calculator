    var firstValue = "";
    var secondValue = "";
    var operator;
    var decimal;
    var editedValue;
            
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

        // function deleteSymbol(){
        //     var editedValue = document.getElementsByClassName("display")[0].innerHTML.slice(0, -1);
        //     document.getElementsByClassName("display")[0].innerHTML= editedValue;
        //     if (operator !== "string"){ 
        //         firstValue = editedValue;
        //     } else if (operator && firstValue){
        //         secondValue = editedValue;
        //     }

        // }

        function deleteSymbol (){
            debugger;
            if (typeof operator !== "string") {
                document.getElementsByClassName("display")[0].innerHTML = firstValue = firstValue.slice(0, -1);
            } else{
                document.getElementsByClassName("display")[0].innerHTML = secondValue = secondValue.slice(0, -1);
            }

        }
































