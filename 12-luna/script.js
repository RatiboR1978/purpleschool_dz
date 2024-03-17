/*-- 12.11. Домашнее задание - Работа со стороками --*/

const str = '4123-4567-8901-2349';

const funcLuna = (str) => {
  str = str.replaceAll('-', '');
  let result = [];
  const arr = str.split('');
  arr.forEach((item, i) => {
    if ((i + 1) % 2 !== 0) {
      result.push((item * 2 > 9) ? item * 2 - 9 : item * 2);
    } else {
      result.push(item * 1)
    }
  })
  
  result = result.reduce((sum, item) => sum + item)
  return result % 10 === 0;
}

console.log(funcLuna(str))