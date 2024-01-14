// Extract substring between prefix and suffix

"use strict";

const getvaluebetween = (str, prefix, suffix) => {
  i = str.indexOf(prefix);
  if (i === -1) return '';
  else {
    k = i + prefix.length;
    str = str.substring(k);
    if (suffix) {
      i = str.indexOf(suffix);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;
