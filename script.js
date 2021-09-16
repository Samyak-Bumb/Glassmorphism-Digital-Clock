var time = document.getElementById("time");
var day = document.getElementById("day");
var midday = document.getElementById("ampm");
var clock = setInterval(
    function calcTime(){
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();
        var ampmValue = "AM"
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        day.textContent = days[date_now.getDay()];
        ampmValue = (hr >= 12) ? "PM" : "AM";
        if(hr == 0){
            hr = 12;
        }
        else if(hr > 12){
            hr-=12;
        }
        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        time.textContent = hr + ":" + min + ":" + sec;
        midday.textContent = ampmValue;
    },
    1000
);