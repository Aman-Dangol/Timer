var min = document.getElementById('minutes') ;
var sec = document.getElementById('secs');
var hr = document.getElementById('hr');
var hrCount=0;
var minCount =0;
var secCount = 0;
hr.innerHTML=0;
hr.innerHTML=hrCount.toString().padStart(2,'0');
min.innerHTML=minCount.toString().padStart(2,'0');
sec.innerHTML=secCount.toString().padStart(2,'0');
function start(){
    var secCountInNumber= secCount.toString().padStart(2,'0');
    console.log("secCount", secCountInNumber)
    secCount++;
    if(secCount==60){
        minCount++;
        if (minCount==60) {
            hrCount++;
            minCount=0;
            secCount=0;
        hr.innerHTML=hrCount.toString().padStart(2,'0'); 
        min.innerHTML=minCount.toString().padStart(2,'0');
        sec.innerHTML=secCountInNumber.toString().padStart(2,'0');

        }
        else
        {
        secCount=0;
        min.innerHTML=minCount.toString().padStart(2,'0');
        sec.innerHTML=secCountInNumber;
        }
    }
    else{
        sec.innerHTML=secCountInNumber;

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
