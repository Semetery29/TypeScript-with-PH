{
  // conditional type

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // nested conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    // plane: string
  };

  // keyof Sheikh "bike" | "car" | "ship"

  // if he/she have car or bike or ship or tractor
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasPlane = CheckVehicle<"plane">; // plane is commented, so it will be came out as false

  //
}
