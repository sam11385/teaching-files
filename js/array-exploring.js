let food = ['burger', 'pizza', 'egg roll', 'calzone', 'salad', 'cabbage'];

// Remove or add items from array
// The first argument is the array index
// The second argument is how many elements to remove
food.splice(2, 1);
console.log(food);

// The third argument, in a splice, is the item to add to the array
food.splice(2, 1, 'taco');
console.log(food);

// Order an array by .sort or .reverse

// Sort the array
food.sort();
console.log(food);

// Reverse the array
food.reverse();
console.log(food);
