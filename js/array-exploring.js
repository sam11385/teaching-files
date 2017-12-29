let data = [5, 1, 8];

// Remove or add items from array
// The first argument is the array index
// The second argument is how many elements to remove
data.splice(2, 1);
console.log(data);

// The third argument, in a splice, is the item to add to the array
data.splice(2, 1, 'taco');
console.log(data);

// Order an array by .sort or .reverse

// Sort the array
data.sort();
console.log(data);

// Reverse the array
data.reverse();
console.log(data);
