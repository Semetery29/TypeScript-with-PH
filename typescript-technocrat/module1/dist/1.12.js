"use strict";
{
    // nullable types | unknown types
    var searchName = function (value) {
        if (value) {
            console.log("Seaching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    //  unknown type (using typeOf)
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed));
        }
        if (typeof value === "string") {
            var _a = value.split(" "), res = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(res) * 1000) / 3600;
            console.log("The Speed is ".concat(convertedSpeed));
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeedInMeterPerSecond(null);
    //   never type
    var throwError = function (msg) {
        throw new Error(msg);
    };
    throwError("mushkill se error hogaya");
    //
}
