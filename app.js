const div = document.getElementById("MyClockDisplay");
let sec = 0;
let min = 0;
let hour = 0;

function showTime() {
    sec += 1;
    if (sec == 5) {
        min++;
        sec = 0;
    } else if (min == 5) {
        hour++;
        min = 0;
    } else if (hour == 5) {
        hour = 0;
        min = 0;
        sec = 0;
    }

    div.innerText = "0" + hour + ":" + "0" + min + ":" + "0" + sec;

}

setInterval(showTime, 1000);