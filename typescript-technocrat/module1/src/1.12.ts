{
  // nullable types | unknown types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Seaching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  //  unknown type (using typeOf)

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed}`);
    }

    if (typeof value === "string") {
      const [res, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(res) * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed}`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond(null);

  //   never type

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkill se error hogaya");

  //
}
