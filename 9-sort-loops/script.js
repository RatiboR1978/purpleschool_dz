/*-- 9.9. Домашнее задание - Циклы --*/

const arr = [1, 40, -5, 10, 0];

const sortArr = (arr) => {
  const [...result] = arr;
  for(let i = 0; i < result.length; i++) {
    for(let j= i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        [result[i], result[j]] = [result[j], result[i]];
      }
    }
  }
  return result;
}

console.log(sortArr(arr), arr)