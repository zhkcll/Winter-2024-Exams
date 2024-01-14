// Extract substring between prefix and suffix

"use strict";

const getvaluebetween = (str, prefix, s) => {
  i = str.indexOf(prefix);
  if (i === -1) return '';
  else {
    k = i + prefix.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
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
