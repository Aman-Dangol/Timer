var min = document.getElementById('minutes') ;
var sec = document.getElementById('secs');
var hr = document.getElementById('hr');
var hrCount=0;
var minCount =0;
var secCount = 0;
hr.innerHTML=0;
min.innerHTML=minCount;
sec.innerHTML=secCount;
function start(){
    secCount++;
    if(secCount==60){
        minCount++;
        if (minCount==60) {
            hrCount++;
            minCount=0;
            secCount=0;
        hr.innerHTML=hrCount; 
        min.innerHTML=minCount;
        sec.innerHTML=secCount;

        }else
        {
        secCount=0;
        min.innerHTML=minCount;
        sec.innerHTML=secCount;
        }
    }
    else{
        sec.innerHTML=secCount;

    }
}

let x;
function begin(){
     x = setInterval(start,1000);
}
function stop(){
    clearInterval(x);
}
let clock=false;
function onOrOff(){ 
    clock=!clock;
    if(clock==true){
        begin();
    }
    else{
        stop();
    }
}
