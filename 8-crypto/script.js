/*-- 8.12. Домашнее задание - Массивы --*/

const crypto = (str) => {
	const arr = str.split('');
	const firstArr = arr.splice(arr.length / 2).reverse();
	const secondArr = arr.splice(0).reverse();
  [firstArr[0], firstArr[1], firstArr[2], firstArr[3]] = [firstArr[0], firstArr[2], firstArr[1], firstArr[3]];
  
  return secondArr.concat(firstArr).join('');
}

function  checkPassword(password, codeStr){
   return password === crypto(codeStr);
}

console.log(crypto('password'))
console.log(checkPassword('password', 'ssapdorw'))