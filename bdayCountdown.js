function docWriter() {
    document.write("Stuff")
    //currDate + dateCountdown
}

function currDate() {
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
    date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
            
    var strdd = dd.toString();
    var stryyyy = yyyy.toString();

    var finalWrite = strdd + " " + months[mm] + " " + stryyyy;
    document.write(finalWrite);
}

function dayCountdown() {
    
    var finalWrite;
    var end = new Date('05/16/2019 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.write("Past Birthday")
            return;
        }
        
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        finalWrite = days + " Days, " + hours + " Hours, " + minutes + " Minutes, " + seconds + " Seconds until I Turn 17";
        document.getElementById("timeToBday").innerHTML = finalWrite;
    }

    timer = setInterval(showRemaining, 1000);
        

}

