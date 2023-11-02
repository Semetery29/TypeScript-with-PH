{
  // Learning Function
  // Normal Function

  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  add(1, 2);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method

  const poorUser = {
    name: "Suny",
    balance: 0,
    addBalance(balance: number): string {
      return `My New balance is : ${this.balance + balance}`;
    },
  };

  // square of a number

  const arr: number[] = [1, 2, 10];

  const newArray: number[] = arr.map((elem: number): number => elem * elem);
}
