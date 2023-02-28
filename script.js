
let start=document.getElementById("start");
let stop=document.getElementById("pause");
let reset=document.getElementById("reset");
let cast=document.getElementById("cast")

let display=document.getElementById("display");

let h1=document.createElement("h1");

let castcount=0

let hours=00;
let minutes=00;
let seconds=00;
let milli=000;

let text;
let timer;

start.addEventListener("click",function(){
    timer=true;

    document.getElementById("start").disabled=true

    stopwatch()
})




stop.addEventListener("click",function(){
    timer=false;
    document.getElementById("start").disabled=false;

    stopwatch()
})

cast.addEventListener("click",function(){


    let hrstr=hours;

    let minstr=minutes;

    let secstr=seconds;
    let millistr=milli;



    if(hours<10){
        hrstr="0"+hrstr;
    }
    if(minutes<10){
        minstr="0"+minstr
    }
    if(seconds<10){
        secstr="0"+secstr
    }
    if(milli<10){
        millistr="0"+millistr
    }







let br=document.createElement("br")
castcount++

text=document.createTextNode(`CAST ${castcount}: ${hrstr}:${minstr}:${secstr}:${millistr}`)

h1.appendChild(text)
h1.appendChild(br)

display.appendChild(h1)
// display.appendChild(br)






})


reset.addEventListener("click",function(){

    timer=false;
    hours=0;
    minutes=0;
    seconds=0;
    milli=0;
    castcount=0;

    document.getElementById("start").disabled=false;

    document.getElementById("display").innerHTML=""
    display.innerText=""

    text.innerHTML=""
    h1.innerHTML=""

})








reset.addEventListener("click",function(){
    timer=false;
    hours=0;
    minutes=0;
    seconds=0;
    milli=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("milli").innerHTML="000";

})







function stopwatch(){

    if(timer){
        milli=milli+5
    
        if(milli==1000){
            seconds++
            milli=0
        }
        if(seconds==60){
            minutes++
            seconds=0
        }
        if(minutes==60){
            hours++
            minutes=0
            seconds=0
        }
        let hrstr=hours;

        let minstr=minutes;

        let secstr=seconds;
        let millistr=milli;

        if(hours<10){
            hrstr="0"+hrstr;
        }
        if(minutes<10){
            minstr="0"+minstr
        }
        if(seconds<10){
            secstr="0"+secstr
        }
        if(milli<10){
            millistr="00"+millistr
        }
        if(milli<100&&milli>10){
            millistr="0"+millistr
        }
       


        document.getElementById("hr").innerHTML=hrstr;
        document.getElementById("min").innerHTML=minstr;
        document.getElementById("sec").innerHTML=secstr;
        document.getElementById("milli").innerHTML=millistr;



        setTimeout(stopwatch,1)
    
    }

}



