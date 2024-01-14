// Copy all values from dict except listed

'use strict';

const EXCEPT = (dict, ...list) => {
  const res={...list};
  const keys =Object.keys(dict);
  for (const key of keys){
    if(list.includes(key)){
      delete res[key];
    }
  }
  return res;
};

module.exports = EXCEPT;
