// Find key by value
'use strict';

find = (object, found) => {
  const key = Object.keys(object);
  for (const key of keys) {
    if (object[key] === found) {
      return key;
    }
  }
  return undefined;
};

module.exports = find;
