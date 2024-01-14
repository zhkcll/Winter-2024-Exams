// Copy all values from dict except listed

'use strict';

const EXCEPT = (dict, ...list) => {
  const res={};
  const keys =Object.keys(dict);
  for (const key of keys){
    if(!list.includes(key)){
      res[key]=dict[key];
    }
  }
  return res;
};

module.exports = EXCEPT;
