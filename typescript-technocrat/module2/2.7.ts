{
  // generics constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue=<X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];
  }

  const user = {
    name: "Mr. Persia",
    age: 26,
    address: "CTG",
  };

  const car = {
    model: "TOYOTA 100",
    year: 200
  };

  const result1 = getPropertyValue(car, "model");

  // user["age"]  26

  //
}
