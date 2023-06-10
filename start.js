var min = document.getElementById('minutes') ;
var sec = document.getElementById('secs');
var minCount =0;
var secCount = 0;
min.innerHTML=minCount;
sec.innerHTML=secCount;
function start(){
    secCount++;
    if(secCount==60){
        minCount++;
        secCount=0;
        min.innerHTML=JSON.stringify(minCount);
        sec.innerHTML=JSON.stringify(secCount);
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
