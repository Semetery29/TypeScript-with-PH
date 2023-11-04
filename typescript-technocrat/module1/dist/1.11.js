"use strict";
var _a, _b;
{
    // ternary operator || Optional Chaining || nullish coalescing operator
    var age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    var isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult: isAdult });
    // nullish coalescing operator
    // null / undefined ---> decision making
    var isAuthenticated = null; // only going to execute when defined as undefined or nill.
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    var result2 = isAuthenticated;
    console.log({ result1: result1 });
    var user_1 = {
        name: "persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentAddress: "CTG town",
        },
    };
    var permanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress: permanentAddress });
    //
}
