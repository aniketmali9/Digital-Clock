function displayTime(){
    var date = new Date()
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var section = document.getElementById('section');

    if(hrs>=12){
        section.innerHTML = 'PM';
    }else{
        section.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs= hrs -12;
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById('hours').innerHTML= hrs;
    document.getElementById('minutes').innerHTML= min;
    document.getElementById('seconds').innerHTML= sec;

}
setInterval( displayTime, 10);