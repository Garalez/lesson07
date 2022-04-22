'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const average = (cash) => {
  let total = 0;
  for (let i = 0; i < cash.length; i++) {
    total += cash[i];
  }
  return total/cash.length;
}

console.log(average(allCashbox));



