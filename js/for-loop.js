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

// Notice that all we did was move the for logic inside of a closure.
// We hid away the implementation details of how we iterate and print a list of names
// and named it something very descriptive, printNames,
// so that when we use it later on ( printNames(myList) ),
// we know what it does without needing to know the details of how.
