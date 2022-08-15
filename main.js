function displayTime() {
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  let todayDate = new Date().getTime();
  let futureDate = new Date(
    tempYear,
    tempMonth,
    tempDay + 10,
    00,
    00,
    00
  ).getTime();

  let difference = futureDate - todayDate;

  if (difference < 0 || difference === 0) {
    let show = document.querySelector(".show");
    show.innerHTML = "Date has expired";
    clearInterval(showTime);
  }

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let remDays = Math.floor(difference / days);
  let remHours = Math.floor((difference % days) / hours);
  let remMinutes = Math.floor((difference % hours) / minutes);
  let remSeconds = Math.floor((difference % minutes) / seconds);

  let time = document.querySelectorAll(".time");

  let timeArr = [remDays, remHours, remMinutes, remSeconds];
  time.forEach(function (times, index) {
    times.innerHTML = timeArr[index];
  });
}

let showTime = setInterval(displayTime, 1000);
