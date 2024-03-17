/*-- 10.06. Домашнее задание - Функции высшего порядка --*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numValidation = (num) => num < 3;

const filterArr = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!numValidation(arr[i])) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log(filterArr(arr, numValidation))