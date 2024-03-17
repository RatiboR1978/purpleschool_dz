/*-- 11.13. Домашнее задание - Итерация в массивах --*/

const arr = ["01.02.22", "11.12.23", "0.13.22", "41.12"]

const strValidation = (str) => {
  let arr = str.split('.');
  if (arr.length !== 3) {
    return false;
  }
  arr = arr.map((el) => el * 1);
  
  return ((arr[0] > 0 && arr[0] < 32) && (arr[1] > 0 && arr[1] < 13)) ? true : false;
}

const arrayValidation = (arr) => {
  return arr.filter((el) => strValidation(el));
}

console.log(strValidation("01.02.22"))
console.log(arrayValidation(arr))