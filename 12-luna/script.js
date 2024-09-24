/*-- 12.11. Домашнее задание - Работа со стороками --*/

const card = '234s834503458353';
const card1 = '2342834503458353';
const card2 = '4561-2612-1234-5464';
const card3 = '4561-2612-1534-5464';

const funcLuna = (str) => {
  let arr = str.replaceAll('-', '').split('').map(Number);
  
  if (arr.includes(NaN)) {
        return NaN;
  }
  
  const isEven = (arr.length - 1) % 2 === 0; 
 

  for (let i = isEven ? 1 : 0 ; i < arr.length; i = i + 2) {
    arr[i] = arr[i] * 2 > 9 ? arr[i] * 2 - 9 : arr[i] * 2;
  }

  const sum = arr.reduce((sum, item) => sum + item)
  return sum % 10 === 0;
}

console.log(funcLuna(card));
console.log(funcLuna(card1));
console.log(funcLuna(card2));
console.log(funcLuna(card3));