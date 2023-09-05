var no1;
var no2;
var operation;
var trid;
var display = document.getElementById("display");
function deleteDisplay() {
    display.innerText = "";
    no1 = null;
    no2 = null;
    operation = null;
}
function opp(opera) {
    if (operation == null) {
        operation = opera;
        display.innerText += operation;
    }
}
function digin(digit) {
    if (operation == null && no1 == null) {
        no1 = digit;
        display.innerText += digit;

    } else if (operation == null && no1 != null) {
        no1 = no1 * 10;
        no1 += digit;
        display.innerText += digit;
    } else if (operation != null && no2 == null) {
        no2 = digit;
        display.innerText += digit;
    } else if (no2 != null) {
        no2 = no2 * 10;
        no2 += digit;

        display.innerText += digit;
    }
}
function result() {
    if (operation != null && no1 != null && no2 != null) {
        switch (operation) {
            case '+': display.innerText = "";
                display.innerText = no1 + no2;
                no1 = null;
                no2 = null;
                operation = null;
                break;
            case '-': display.innerText = "";
                display.innerText = no1 - no2;
                no1 = null;
                no2 = null;
                operation = null;
                break;
            case '*': display.innerText = "";
                display.innerText = no1 * no2;
                no1 = null;
                no2 = null;
                operation = null;
                break;
            case '/': display.innerText = "";
                display.innerText = no1 / no2;
                no1 = null;
                no2 = null;
                operation = null;
                break;

            default: display.innerText = "Enter a valid Operation";
                no1 = null;
                operation = null;
                no2 = null;
                break;
        }
    }

}
function remove() {
    if (no2 != null) {
        trid = no2 % 10;
        no2 = no2 - trid;
        trid = null;
        display.innerText = "";
        if(no2 != 0){
            no2 = no2 / 10;
            display.innerText = no1 + operation + no2;
            
        }else if(no2 == 0){
            no2 = null;
            display.innerText = no1 + operation;
        }
    } else if (no2 == null && operation !== null) {
        display.innerText = "";
        display.innerText = no1;
        operation = null;
    } else {
        trid = no1 % 10;
        no1 = no1 - trid;
        trid = null; 
        display.innerText = "";
        if (no1 != 0) {
            no1 = no1 / 10;
            display.innerText = no1;
        } else if (no1 == 0){
            display.innerText = "";
            no1 = null;
        }
    }
}
