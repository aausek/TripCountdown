const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// TODO: Convert the workflow to get user input date
const mainDate = "22 Dec 2021";

function Countdown() {
    const reformattedDate = new Date(mainDate);
    const currentDate = new Date();

    const totalSeconds = (reformattedDate - currentDate) / 1000;

    // const months = Math.floor(totalSeconds / 3600 / 24 / 30);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    // console.log(Math.floor(totalSeconds), days, hours, minutes, seconds);

    // if (days > 30) {
    //     monthsElement.innerHTML = months;
    // } else {
    //     monthsElement.innerHTML = '0';
    // }

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

setInterval(Countdown, 1000);

Countdown();