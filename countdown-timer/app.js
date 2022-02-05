const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 3, 24, 11, 30, 0, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date}, ${month} ${year} ${hours}:${mins}AM`;

// Future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay ) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item){
    if (item < 10){
      return item = `0${item}`;
    }else {
      return item;
    }
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  if (t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }  
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();