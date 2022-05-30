let minutes=0;
let seconds=0;
let tenMIllis=0;

let appendTens=document.getElementById("tenMIllis");
const appendSeconds=document.getElementById("seconds");
const appendMintes=document.getElementById("minutes");
const buttonStart=document.getElementById("bt_start");
const buttonStop=document.getElementById("bt_stop");
const buttonReset=document.getElementById("bt_reset");
let intervalId;
buttonStart.onclick=function (){
  intervalId=setInterval(operateTimer,10);
}
buttonStop.onclick=function (){
    clearInterval(intervalId);
}
buttonReset.onclick=function (){
    tenMIllis=0;seconds=0;minutes=0;
    appendTens.textContent="00"
    appendMintes.textContent="00"
    appendSeconds.textContent="00"
}
function operateTimer(){
    tenMIllis++;
    appendTens.textContent=tenMIllis >9 ? tenMIllis:'0'+tenMIllis;
    if(tenMIllis > 99){
        seconds++;
        appendSeconds.textContent=seconds>9 ? seconds:'0'+seconds;
        tenMIllis=0;
        appendTens.textContent="00"
    }
    if(seconds>59){
        minutes++;
        appendMintes.textContent=minutes>9 ? minutes:'0'+minutes;
        seconds=0
        appendSeconds.textContent="00"
    }
}