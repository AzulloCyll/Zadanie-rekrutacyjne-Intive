class Bank {
  showTransactions() {
    console.log(this.transactions);
  }

  async init() {
    this.transactions = "500";
  }
}

const myBank = new Bank();

myBank.init();
myBank.showTransactions();
