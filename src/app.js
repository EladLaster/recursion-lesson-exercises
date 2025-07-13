/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(number) {
  //Your code here
  if(number<0){
      return null;
  }
  let sum=0;
  if (number === 0 || number === 1)
      return 1;
  return number*findFactorial(number-1);
}

console.log(findFactorial(-1));
console.log(findFactorial(0));
console.log(findFactorial(5));
console.log(findFactorial(3));
console.log(findFactorial(1));

//Exercise 2
const reverseString = function(str) {
  //Your code here
  if (str === "" || str.length === 1)
    return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("elad"));
console.log(reverseString("i"));
console.log(reverseString(""));

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2) {
  //Your code here
  if(arr1.length == 0)
    return;
  const element = arr1.pop();
  swap(arr1, arr2);
  arr2.push(element);
}

swap(arr1, arr2)
console.log(arr1)
console.log(arr2)


//Extension
// function swap(stack1, stack2) {
//   if (stack1.length === 0) {
//     return;
//   }

//   const item = stack1.pop();
//   swap(stack1, stack2);
//   stack2.push(item);
// }



/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }