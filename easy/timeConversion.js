const timeConversion = time => {

  // convert time into 24 hour format
  // 07:05:45PM => 19:05:45

  const PM = time.includes('PM');

  time = time.replace(/(AM)|(PM)/g, '');

  time = time.split(':');

  let hour = Number(time[0]);
  const minute = time[1];
  const second = time[2];

  if (PM && hour < 12) {
    hour = hour + 12;
  } else if (!PM && hour == 12) {
    hour = 0;
  }

  hour = hour < 10 ? '0' + hour : hour;

  return hour + ':' + minute + ':' + second;
};

module.exports = timeConversion;