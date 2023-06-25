//assign , user later , arguments- list of items

// runs instantly , arguments-array of items
const Nabin = {
  firstName: 'Nabin',
  age: 24,
  //   greet: function () {
  //     console.log(this);
  //     console.log(
  //       `hello my name is ${this.firstName} and i'm ${this.age} years old`
  //     );
  //   },
};

const jeewan = {
  firstName: 'jeewan',
  age: 28,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello my name is ${this.firstName} and i'm ${this.age} years old and i lives in ${city}, ${country}`
  );
}
// assign it and user later
const greetNabin = greet.bind(Nabin, 'Kanchanpur', 'Nepal');
greetNabin();
