// Sum all number values in dict

'use strict';

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  for (const keys of (key)) => {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
}

module.exports = count;
