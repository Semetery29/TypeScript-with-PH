{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    /*private*/ protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);

  // goribManusherAccount.deposit = 0;
  // goribManusherAccount.addDeposit(20); // need to call function

  // const myBalance = goribManusherAccount.getBalance(); // need to call function

  const myBalance = goribManusherAccount.balance; // using function like a property
  console.log(myBalance);

  //
}
