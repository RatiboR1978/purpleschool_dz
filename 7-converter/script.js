/*-- 7.10. Домашнее задание - Функции --*/

const converter = (sum, means, currency) => {
	const RATE_USD_RUB = 90;
	const RATE_EUR_RUB = 100;
	const RATE_USD_EUR = 0.91;

	if (currency !== 'USD' && currency !== 'RUB' && currency !== 'EUR') {
		return null;
	}

	if (means === 'RUB') {
		switch(currency) {
			case 'USD': 
				return 1 / RATE_USD_RUB * sum;
				break;
			case 'EUR': 
				return 1 / RATE_EUR_RUB * sum;
      		break;
    		default: 
				return null;
		}
	}

	if (means === 'USD') {
		switch(currency) {
			case 'EUR': 
				return 1 / RATE_USD_EUR * sum;
      		break;
			case 'RUB': 
				return RATE_USD_RUB * sum;
      		break;
    		default: 
				return null;
		}
	}

	if (means === 'EUR') {
		switch(currency) {
			case 'USD': 
				return RATE_USD_EUR * sum;
      		break;
			case 'RUB': 
				return RATE_USD_RUB * sum;
      		break;
    		default: 
				return null;
		}
	}
}

console.log(converter(1000, 'USD', 'RUB'))