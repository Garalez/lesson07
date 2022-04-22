'use strict';

const allCashboxHard = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const sumCash = (arr) => {
  let sum = 0;
  arr.forEach(el => {
    sum += el[1] / el[0];
  });
  return Math.round(sum / arr.length);
}

console.log(sumCash(allCashboxHard));




