"use strict";
// destructuring
// object destructuring
{
    var user_1 = {
        id: 345,
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastName: "Persian",
        },
        contactNo: "01700000000",
        address: "Uganda",
    };
    var number = user_1.contactNo, midName = user_1.name.middleName;
}
// array destructuring
var myfriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe "];
var bestFriend = myfriends[2];
