// example 1
const outer = () => {
  const private = 'private';
  const inner = () => {
    console.log(`Hello there i'm inner function and im accessing ${private}`);
  };
  return inner;
  inner();
};
outer()(); // invoking inner function

// call way or above
// const result = outer();
// result();

// example 2

const newAccount = (customerName, initialBalance) => {
  let balance = initialBalance;
  const showBalance = () => {
    console.log(`Dear ${customerName} you total balance is ${balance}`);
  };
  const deposit = (amount) => {
    balance += amount;
    showBalance();
  };
  const withdraw = (amount) => {
    if (amount > balance) {
      console.log(`insufficient balance`);
    }
    balance -= amount;
    showBalance();
  };
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
};
// newAccount('Ramhari', 600)();

const susan = newAccount('susan', 500);
const mona = newAccount('Mona', 400);
susan.showBalance();
susan.deposit(500);
susan.withdraw(1000);
