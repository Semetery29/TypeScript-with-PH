"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    // destructuring
    // rest operator
    //   learn spread operator
    var bros1 = ["Mir", "Firoz", "Mizan"];
    var bros2 = ["Tonmoy", "Nahid", "Rahat"];
    bros1.push.apply(bros1, bros2);
    /*const bros1 : string[] = ["Mir", "Firoz", "Mizan"]
  const bros2 : string[] = ["Tonmoy", "Nahid", "Rahat"]
  
  bros1.push(bros1) // wrong technique, typescript will only accept string value and array of string is !string
  
   */
    var mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    var mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    //   learn rest operator
    var greetFriends = function () {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
    };
    greetFriends("Abul", "Kabul", "babul", "ubul", "labul");
}
