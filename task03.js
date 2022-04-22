'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, str) => {
  arr = arr.map(i => `${str} ` + i);
  return arr;
}

console.log(addPrefix(names, 'Mr'));




