const Ram = {
  firstName: 'Ram',
  age: 24,
  //   greet: function () {
  //     console.log(this);
  //     console.log(
  //       `hello my name is ${this.firstName} and i'm ${this.age} years old`
  //     );
  //   },
};

const Hari = {
  firstName: 'Hari',
  age: 28,
};

function greet() {
  console.log(this);
  console.log(
    `hello my name is ${this.firstName} and i'm ${this.age} years old`
  );
}

greet.call(Ram);
greet.call(Hari);
