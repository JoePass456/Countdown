const countDownFrom = document.getElementById('countDownFrom');
const startCount = document.querySelector('.startCount');
const counter = document.querySelector('.counter');

startCount.addEventListener('click', result);

function result() {
    counter.style.visibility = 'visible';
    // Break down the countDownFrom into hours, minutes, and seconds
    let countDown = countDownFrom.value;
    let days = Number(countDown.slice(0, 2))
    let hours = Number(countDown.slice(3, 5));
    let minutes = Number(countDown.slice(6, 8));
    let seconds = Number(countDown.slice(9, 11));

    var myVar = setInterval(countdown, 1000);
    function countdown() {
        counter.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            endCountDown();
        }
        seconds--;
        if (seconds == -1) {
            seconds = 59;
            minutes--;
        }
        if (minutes == -1) {
            minutes = 59;
            hours--;
        }
        if (hours == -1) {
            hours = 23;
            days--;
        }


    }
    function endCountDown() {
        clearInterval(myVar)
        counter.textContent = "****KABOOM****";
    }

    // Print the days hours, minutes and seconds
}