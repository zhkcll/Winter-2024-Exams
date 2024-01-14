// Get day number

'use srict';

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseday = (s) => {
  let number;
  for (const day of week) {
    if (s.startsWith(day)) {
      return number + 1;
    }
  }
  return number;
};

module.exports = _parse_day_;
