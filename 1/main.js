//first 
// function minutesSinceMidnight(timeStr) {
//     let rg = /(\d{1,2})\:(\d{1,2})\s+([ap])\.?m/
//     let [,hour, minute, am] = rg.exec(timeStr);
//     hour = Number(hour);
//     if (am === 'a' && hour === 12) hour -= 12;
//     if (am === 'p' && hour < 12) hour += 12;
//     return hour * 60 + Number(minute);
// }

// function minutesToHoursAndMinutes(totalMinutes) {
//     let hours = Math.floor(totalMinutes / 60);
//     let minutes = totalMinutes % 60;
//     return [ hours, minutes]
// }

// function timeToEat(timeStr) {
//     let currentTime = minutesSinceMidnight(timeStr);
//     let mealTimes = ['7:00 a.m', '12:00 p.m.', '7:00 p.m.'].map(minutesSinceMidnight);
//     let nextMealTime = mealTimes.find(mealTime => mealTime >= currentTime);
//     if (nextMealTime === undefined) {
//         return nextMealTime;
//     }
//     let timeToNextMealMinutes = nextMealTime - currentTime;
//     return minutesToHoursAndMinutes(timeToNextMealMinutes);
// } 

// console.log(timeToEat("2:00 a.m."));
// console.log(timeToEat("5:50 p.m."));
// console.log(timeToEat("6:30 p.m."));


//second
const date = new Date();

timeToEat = (time) => {
  let h = time.getHours();
  let m = time.getMinutes();
  dateArr = [];
  if (h >= 12) {
    dateArr = [h, ":", m, "p.m."];
  } else {
    dateArr = [h, ":", m, "a.m."];
  }
  if (dateArr[0] < 12 && dateArr[0] >= 7) {
    let remainTime = [11 - dateArr[0], 60 - dateArr[2]];
    console.log(remainTime);
    console.log(
      `${remainTime[0]} hours and ${remainTime[1]} minutes until the next meal, Lunch`
    );
  } else if (dateArr[0] < 19 && dateArr[0] >= 12) {
    let remainTime = [18 - dateArr[0], 60 - dateArr[2]];
    console.log(remainTime);
    console.log(
      `${remainTime[0]} hours and ${remainTime[1]} minutes until the next meal, dinner`
    );
  } else {
    let remainTime = [ dateArr[0]- 6, 60 - dateArr[2]];
    console.log(remainTime);
    console.log(
      `${remainTime[0]} hours and ${remainTime[1]}minutes until the next meal, breakfast`
    );
  }
};

timeToEat(date);
