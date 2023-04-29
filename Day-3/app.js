const arr = [1,2,3,4,5,6];
const nums = [];

// 1. push -> adding element to the end of array

// for(let i = 1; i < 6; i++){
//     nums.push(i);
// }
// console.log(nums);

// 2. pop - > delete element from end

// nums.pop();
// nums.pop();
// console.log(nums);

// 3. shift -> remove element at start and 4. unshift -> add element at start of array
// 5. length -> gives the size of array

// arr.shift();
// arr.unshift(15);
// console.log(arr, arr.length);

// const fruits = ['apple', 'banana', 'melon', 'mango', 'orange', 'grapes'];
// console.log(fruits);
// 6. splice method -> it takes three arguments: index, no of item to be removed and no of item to be added
// fruits.splice(2, 1, 'pear', 'cherry');
// console.log(fruits); // ['apple', 'banana', 'pear', 'cherry', 'mango', 'orange', 'grapes'];

// 7. slice method -> it return a copy of elemetn from start index to mentioned index -1
// const citrusFruits = fruits.slice(2, 4);
// console.log(citrusFruits);

// 8. find method -> it return a object and takes a function/callback with other two parameter
// const myFruits = fruits.find((data) => data === 'cherry');
// console.log(myFruits);

// 9. filter -> it return object and takes a function with other param
const evenNum = arr.filter((num) => {
    return num %2 == 0;
});
console.log(evenNum);
// 10. map -> returns a new object
const sqOfEven = evenNum.map((num) => {
    return num* num;
});
console.log(sqOfEven);
// 11. reduce -> use to calculate the sum of prefix array in table or list

const sum = arr.reduce((currVal, accumulator) => {
    return currVal + accumulator;
},125)
console.log(sum);