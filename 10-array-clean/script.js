/*-- 10.06. Домашнее задание - Функции высшего порядка --*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterArr = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

const resultArr = filterArr(arr, (num) => num < 3);

console.log(resultArr)