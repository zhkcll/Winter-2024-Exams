// Return an array without duplicates

'use strict';

const duplicate = (startvalue, N) => {
  if (N <= 0) {
    return [];
    {
  else {
    const res = [];
    for (let i = 0; i < N; i++) {
      res[i] = startvalue;
    }
    return res;
  }
};

module.exports = duplicate;
