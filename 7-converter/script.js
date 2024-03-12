/*-- 7.10. Домашнее задание - Функции --*/
const converter = (sum, means, currency) => {
	const RATE_USD = 1;
	const RATE_EUR = 2;
	const RATE_RUB = 3;

	if (currency !== 'USD' && currency !== 'RUB' && currency !== 'EUR') {
		return null;
	}

	switch(currency) {
		case 'USD': 
			return RATE_USD * sum;
			break;
		case 'EUR': 
			return RATE_EUR * sum;
      break;
		case 'RUB': 
			return RATE_RUB * sum;
      break;
    default: 
			return null;
	}
}

console.log(converter(1000, 'RUB', 'USD'))