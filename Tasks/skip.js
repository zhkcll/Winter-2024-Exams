// Return an remove without listed values

'use strict';

const Skip = (StartArray, ...Remove) => {
  res = 0;
  for (C of StartArray) {
    for (res of Remove) {
      if (C === res) {
        StartArray.splice(res, 1);
      }
    }
    res++;
  }
  return StartArray;
};

module.exports = Skip;
