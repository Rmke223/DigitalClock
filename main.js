
setInterval(displayClock, 500);
function displayClock () {
   var time = new Date()
   var hrs = time.getHours();
   var min = time.getMinutes();
   var sec = time.getSeconds();
    var meridien = "A.M."

    // sets am/pm and calulates and removes military time
if (hrs > 12) {
    hrs = hrs - 12;
    meridien = "P.M."
}
//makes 0 hrs appears as 12
if (hrs == 0) {
    hrs = 12;
}
// if hours <10 add zero inf front

if (hrs < 10){
    hrs = "0" + hrs;
}

//adds zero in front of seconds if < 10
if (sec < 10){
    sec = "0" + sec;
}

//adds zero in front of minutes if < 10
if (min < 10){
    min = "0" + min;
}

document.getElementById('clock').innerHTML =  hrs  + ':' + min + ":" + sec + ' ' + meridien;

}


