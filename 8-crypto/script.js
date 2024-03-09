/*-- 8.12. Домашнее задание - Массивы --*/

const crypto = (str) => {
	const arr = str.split('');
	if (arr.length < 7 || arr.length > 7) {
		return 'Пароль должен содержать 7 символов';
	}

	[arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]] = [arr[5], arr[3], arr[4], arr[6], arr[2], arr[0], arr[1]];

	return arr.join('');
}

const check = (str, pass) => {
	const arr = str.split('');

	[arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]] = [arr[5], arr[6], arr[4], arr[1], arr[2], arr[0], arr[3]];

	return arr.join('') === pass;
}

console.log(crypto('1234567'))
console.log(check('6457312', '1234567'))