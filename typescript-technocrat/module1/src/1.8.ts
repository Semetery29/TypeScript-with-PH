// destructuring

// object destructuring
{
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "01700000000",
    address: "Uganda",
  };

  const {
    contactNo: number, //name alias after declaration in object destructuring
    name: { middleName: midName }, // name alias
  } = user;
}

// array destructuring

const myfriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe "];

const [, , bestFriend] = myfriends;
