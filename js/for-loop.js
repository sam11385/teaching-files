// For printNames, we are wanting to tell our worker: Given a list,
// I want you to iterate through the list, grab the current item from the list,
// and print the name property.

const list = [
  {
    name: 'Don',
    age: '27',
  },
  {
    name: 'Ann',
    age: '22',
  },
  {
    name: 'Sally',
    age: '19',
  },
  {
    name: 'John',
    age: '18',
  },
];

for (let i = 0; i < list.length; i++) {
  const person = list[i];
  console.log(person.name);
}

// Refactor for a more functional approach
const myList = [
  {
    name: 'Don',
    age: '27',
  },
  {
    name: 'Ann',
    age: '22',
  },
  {
    name: 'Sally',
    age: '19',
  },
  {
    name: 'John',
    age: '18',
  },
];

const printNames = list => {
  for (let i = 0; i < list.length; i++) {
    const person = list[i];
    console.log(person.name);
  }
};

printNames(myList);

// Notice that all we did above was move the for logic inside of a closure.
// We hid away the implementation details of how we iterate and print a list of names
// and named it something very descriptive, printNames,
// so that when we use it later on ( printNames(myList) ),
// we know what it does without needing to know the details of how.

// For printAges, we are saying:
// Given a list, I want you to iterate through the list,
// grab the current item from the list, and print the age property.

// Theoretically we could take the same for loop and get the age property.
// But that would be repeating the code. Let's not do that!

const myList2 = [
  {
    name: 'Don',
    age: '27',
  },
  {
    name: 'Ann',
    age: '22',
  },
  {
    name: 'Sally',
    age: '19',
  },
  {
    name: 'John',
    age: '18',
  },
];
const forEach = (fn, list) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    fn(item);
  }
};

const printName = person => console.log(person.name);

const printAge = person => console.log(person.age);

forEach(printName, myList2);
forEach(printAge, myList2);
