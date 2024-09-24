/*-- 11.13. Домашнее задание - Итерация в массивах --*/

// Проверка высокосного года
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);


//Прорверяем валидная дата или нет
const isValidDate = (day, month, year) => {
  // Месяцы и количество дней в них
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
}

//Форматируем дату
const formatDate = (arr, separator, resultArr) => {
  arr.forEach((str) => {
    const parts = str.split(separator);
    if (parts.length === 3) {
      const [day, month, year] = parts;
      if (day.length === 2 && month.length === 2 && year.length === 2) {
        if (isValidDate(day, month, year)) {
            resultArr.push(`${day}.${month}.${year}`);
        }
      }
    }
  })
}

const transformDates = (arr) => {
  const result = [];

  formatDate(arr, '.', result);
  formatDate(arr, '/', result);

  return result;
}


const arr = ["10.02.22", "11.12.23", "0.13.22", "41.12", "03/12/23", "15-10-23"];
console.log(transformDates(arr));