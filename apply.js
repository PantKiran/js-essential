const shyam = {
  firstName: 'Ram',
  age: 24,
  //   greet: function () {
  //     console.log(this);
  //     console.log(
  //       `hello my name is ${this.firstName} and i'm ${this.age} years old`
  //     );
  //   },
};

const Krishna = {
  firstName: 'Hari',
  age: 28,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello my name is ${this.firstName} and i'm ${this.age} years old and i lives in ${city}, ${country}`
  );
}

greet.apply(shyam, ['Kathmandu', 'Nepal']);
greet.apply(Krishna, ['Bhaktpur', 'Nepal']);
