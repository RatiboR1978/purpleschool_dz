/*-- 7.10. Домашнее задание - Функции --*/

const RATE_USD_RUB = 90;
const RATE_EUR_RUB = 100;

const changeRub = (sum, rate) => sum * rate;

const converter = (sum, means, currency) => {
	if (means !== 'руб') {
		return null;
	}

	let result = null;

	switch(currency) {
		case 'usd': 
			result = changeRub(sum, RATE_USD_RUB);
			break;
		case 'eur': 
			result = changeRub(sum, RATE_EUR_RUB);
      break;
    default: 
			result;
	}

	return result;
}

console.log(converter(1000, 'руб', 'eur'))