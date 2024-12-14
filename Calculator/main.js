var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b0 = document.getElementById("b0");
var bdot = document.getElementById("dot")

var input = document.getElementById("input");
var clear = document.getElementById("bclear")
var multi = document.getElementById("bmultiply")
var min = document.getElementById("bminus")
var div = document.getElementById("bdivide")
var plus = document.getElementById("bplus")
var equals = document.getElementById("bequals")

var operation = ""
var num1 = ""
var num2 = ""
var isitoperation = false
var result = ""

//all num buttons
bdot.addEventListener("click", function () {
    input.value = input.value + ".";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});

b1.addEventListener("click", function () {
    input.value = input.value + "1";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b2.addEventListener("click", function () {
    input.value = input.value + "2";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b3.addEventListener("click", function () {
    input.value = input.value + "3";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b4.addEventListener("click", function () {
    input.value = input.value + "4";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b5.addEventListener("click", function () {
    input.value = input.value + "5";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b6.addEventListener("click", function () {
    input.value = input.value + "6";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b7.addEventListener("click", function () {
    input.value = input.value + "7";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b8.addEventListener("click", function () {
    input.value = input.value + "8";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
});
b9.addEventListener("click", function () {
    input.value = input.value + "9";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
    })
b9.addEventListener("click", function () {
    input.value = input.value + "";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value))
    }
    else if (isitoperation == false) {
        num1 = (parseFloat(input.value));
        }
    })
b0.addEventListener("click", function () {
    input.value = input.value + "0";
    if (isitoperation == true) {
        num2 = (parseFloat(input.value));
    }
    else if (isitoperation == false) {
    num1 = (parseFloat(input.value));
    }
});

//all operations
plus.addEventListener ("click", function () {
    operation = "+"
    isitoperation = true;
    if (num1 == "") {
        alert ("no first number!");
    }
    else if (num1 != 0 && num2 == 0) {
        input.value = "";
    }
    else if (num1 != 0 && num2 != 0) {
        if (isitoperation == true && operation == "+" ) {
            result = num1 + num2
            num1 = result
            input.value = ""
            num2 = ""
            pre
        }
    }
    })

min.addEventListener ("click", function () {
    operation = "-"
    isitoperation = true;
    if (num1 == "") {
        alert ("no first number!");
    }
    else if (num1 != 0 && num2 == 0) {
        input.value = "";
    }
    else if (num1 != 0 && num2 != 0) {
        if (isitoperation == true && operation == "-" ) {
            result = num1 - num2
            num1 = result
            input.value = ""
            num2 = 0
        }
    }
    })   

multi.addEventListener ("click", function () {
    operation = "*"
    isitoperation = true;
    if (num1 == "") {
        alert ("no first number!");
    }
    else if (num1 != 0 && num2 == 0) {
        input.value = "";
    }
    else if (num1 != 0 && num2 != 0) {
        if (isitoperation == true && operation == "*" ) {
            result = num1 * num2
            num1 = result
            input.value = ""
            num2 = ""
        }
    }
    })
div.addEventListener ("click", function () {
    operation = "/"
    isitoperation = true;
    if (num1 == "") {
        alert ("no first number!");
    }
    else if (num1 != 0 && num2 == 0) {
        input.value = "";
    }
    else if (num1 != 0 && num2 != 0) {
        if (isitoperation == true && operation == "/" ) {
            result = num1 / num2
            num1 = result
            input.value = ""
            num2 = ""
        }
    }
    })

equals.addEventListener ("click", function() {
    isitoperation = true
    if (operation == "+") {
        result = num1 + num2;
        input.value = result  
    } 
    else if (operation == "-") {
        result = num1 - num2;
        input.value = result;
      } 
    else if (operation == "*") {
        result = num1 * num2;
        input.value = result;
      } 
    else if (operation == "/") {
        result = num1 / num2;
        input.value = result;
      }
      num1 = input.value;
      num2 = "";
      operation = "";
    })

//others
clear.addEventListener ("click", function() {
    input.value = "";
    num1 = "";
    num2 = "";
    operation = "";
    isitoperation = false;
    result = ""
})