//setting initial time = 0
let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
//finding second
let seconds = Math.floor((time%(100*60))/1000);
let minutes = Math.floor((time % (100 * 60* 60)) / (1000*60));
let timex = 0;
 

//here we are using set interval function to set the time limit for 30 second using loop
let myTime = setInterval(function(){
    if(seconds <= 30){
        seconds++;
    } 
    //here if timer will reach limit and user haven't selected any answer or have given answer then point will be set to acoording and jumps to end page
    if(seconds == 30){
        sessionStorage.setItem("points", point);
        sessionStorage.setItem("time", ` ${seconds} seconds`);
        clearInterval(myTime);
        location.href = "end.html";
        return;
    }
    //displaying timer on quiz page
    let format_sec = seconds <10 ? `0${seconds}` : `${seconds}`;
    let format_min = seconds < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector(".time").innerHTML = `${format_min} : ${format_sec}`;

},1000)