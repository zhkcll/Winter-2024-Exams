// Split an array into two parts

'use strict';

 const splitArray = (index, array) => {
   res=[array.slice(0, index), array,slice(index, array.length)];
   
  return res;
};

module.exports = splitArray;
