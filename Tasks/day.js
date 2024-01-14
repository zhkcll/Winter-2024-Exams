// Get day number

'use srict';

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

_parse_day_ = (s) => {
  let i;
  for (i = 0; i < week.length; i++) {
    if (s.startsWith(week[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
