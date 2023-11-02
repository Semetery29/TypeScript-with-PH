"use strict";
{
    // Learning Function
    // Normal Function
    function add(num1, num2) {
        if (num2 === void 0) { num2 = 10; }
        return num1 + num2;
    }
    add(1, 2);
    var addArrow = function (num1, num2) { return num1 + num2; };
    // object --> function --> method
    var poorUser = {
        name: "Suny",
        balance: 0,
        addBalance: function (balance) {
            return "My New balance is : ".concat(this.balance + balance);
        },
    };
    // square of a number
    var arr = [1, 2, 10];
    var newArray = arr.map(function (elem) { return elem * elem; });
}
