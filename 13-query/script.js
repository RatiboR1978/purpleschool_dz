/*-- 13.13. Домашнее задание - Объекты --*/

const queryParamsToString = (obj) => Object.keys(obj)
  .map((key) => `${key}=${obj[key]}`)
  .join('&');


console.log(queryParamsToString({search: "Вася", take: 5}))