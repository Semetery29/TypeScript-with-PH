{
  // spread operator
  // destructuring
  // rest operator

  //   learn spread operator

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];

  bros1.push(...bros2);

  /*const bros1 : string[] = ["Mir", "Firoz", "Mizan"]
const bros2 : string[] = ["Tonmoy", "Nahid", "Rahat"]

bros1.push(bros1) // wrong technique, typescript will only accept string value and array of string is !string

 */

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   learn rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("Abul", "Kabul", "babul", "ubul", "labul");
}
