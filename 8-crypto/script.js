const crypto = (str) => {
	const arr = str.split('');
	let firstArr = arr.splice(0, arr.length / 2).reverse();
	const secondArr = arr.reverse();
	for (let i = 0; i < secondArr.length; i = i + 2) {
		firstArr = [...firstArr, secondArr[i]]
	}
	for (let i = 1; i < secondArr.length; i = i + 2) {
		firstArr = [...firstArr, secondArr[i]]
	}

	return firstArr.join("");
}

function  checkPassword(password, codeStr){
   return password === crypto(codeStr);
}

console.log(crypto('password'))
console.log(checkPassword('password', 'ssapdorw'))