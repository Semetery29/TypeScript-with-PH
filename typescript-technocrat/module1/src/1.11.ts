{
  // ternary operator || Optional Chaining || nullish coalescing operator

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = null; // only going to execute when defined as undefined or nill.

  const result1 = isAuthenticated ?? `Guest`;
  const result2 = isAuthenticated;

  console.log({ result1 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentAddress: "CTG town",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
