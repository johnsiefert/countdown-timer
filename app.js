const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let futureDate = new Date(2024, 4, 24, 11, 30, 0);
// console.log(futureDate);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on  ${weekday} ${date}, ${month} ${year} ${hours}:${minutes}am`;

// items.forEach(function (item) {
//     console.log(item);
//   });

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  //current time in ms
  const today = new Date().getTime();
  const time = futureTime - today;
  //1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = time / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((time % oneDay) / oneHour); // how many days then how many hours
  let mins = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  //set values array
  const values = [days, hours, mins, seconds];
  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
if(time < 0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class ="expired"> sorry, this giveaway has expired.</h4>`
}
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
