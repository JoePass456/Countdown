const countDownFrom = document.getElementById('countDownFrom');
const startCount = document.querySelector('.startCount');
const counter = document.querySelector('.counter');
const starter = document.querySelector('.starter');

startCount.addEventListener('click', result);

function result() {
    counter.style.visibility = 'visible';
    //starter.style.visibility = 'hidden';
    
    // Break down the countDownFrom into hours, minutes, and seconds
    let countDown = countDownFrom.value;
    let days = Number(countDown.slice(0, 2));
    let hours = Number(countDown.slice(3, 5));
    let minutes = Number(countDown.slice(6, 8));
    let seconds = Number(countDown.slice(9, 11));

    
    var myVar = setInterval(countdown, 1000);
    function countdown() {
        // formating the counter for display
        let displayTime = " ";
        if (days > 0) {
            displayTime += "Days: " + days + "\xa0\xa0\xa0";
        }
        if (hours < 10) {
            displayTime += "0" + hours + ":";
        } else {
            displayTime += hours + ":";
        }
        if (minutes < 10) {
            displayTime += "0" + minutes + ":";
        } else {
            displayTime += minutes + ":";
        }
        if (seconds < 10) {
            displayTime += "0" + seconds;
        } else {
            displayTime += seconds;
        }
        // display counter
        counter.textContent = displayTime;
        // condition to end counter
        if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            endCountDown();
        }
        // timer counts down
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
    //  function executed when counter ends
    function endCountDown() {
        clearInterval(myVar)
        counter.textContent = "****KABOOM****";
        counter.style.backgroundColor = "yellow";
    }

    
}