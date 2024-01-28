let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;


document.getElementById("start-timer").addEventListener("click", ()=>{
    if(int!==null){
        clearInterval(int);
        document.getElementById("start-timer").innerText = "Start";
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", ()=>{
    clearInterval(int);
    if(int!==null){
        document.getElementById("start-timer").innerText = "Resume";
    }
});


document.getElementById("reset-timer").addEventListener("click", ()=>{
    clearInterval(int);
    int = null;
    if(int==null){
        document.getElementById("start-timer").innerText = "Start";
    }

    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

document.getElementById("lap-timer").addEventListener("click", ()=>{
    document.querySelector(".lap_container").classList.add("activelaps");
    let li = document.createElement("li");
    li.innerHTML = `0${hours} : 0${minutes} : 0${seconds} : ${milliseconds}`;
    document.querySelector(".laps").append(li);
});


document.getElementById("clearlaps").addEventListener("click", ()=>{
    document.querySelector(".laps").innerHTML = "";
    document.querySelector(".lap_container").classList.remove("activelaps");
})

function displayTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes = 0;
                hours++;
            }
        }
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes; 
    let s = seconds < 10 ? "0" + seconds : seconds; 

    let ms = 
        milliseconds < 10 ? "00" + milliseconds 
        : milliseconds < 100 ? "0" + milliseconds 
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}


