const randomArray = [1, 2, 3, 4, 5];
const newArray = [randomArray]; // [[1, 2, 3, 4, 5]]
const newArray1 = [...randomArray]; // [1, 2, 3, 4, 5]

const randomObject = { name: 'John Doe', age: 25 };
const newObject = { randomObject }; // { randomObject: { name: 'John Doe', age: 25 } }
const newObject1 = { ...randomObject }; // { name: 'John Doe', age: 25 }