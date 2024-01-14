// Reverse an array, you can't use .reverse()

'use strict'

const invert = (arr) => {
  const res = [];
  for (let i=arr.length-1; i>=0; i--){
    res.push(arr[i]);
  }
  return res;
};

module.exports = invert;
