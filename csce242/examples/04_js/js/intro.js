/*
const sayHello = () => {
    console.log("Hello World");
}
*/

//document.getElementById("btn-click-me").onclick = sayHello;

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked");   //current traget is the button that was clicked
}

document.getElementById("happy-button").onclick = () => {
    const pChange = document.getElementById("p-change");
    pChange.innerHTML = "Happy!";
    pChange.classList.add("yellow");
    pChange.classList.remove("blue");
}

document.getElementById("sad-button").onclick = () => {
    const pChange = document.getElementById("p-change");
    pChange.innerHTML = "Sad :(";
    pChange.classList.add("blue");
    pChange.classList.remove("yellow");
}

document.getElementById("clear-button").onclick = () => {
    const pChange = document.getElementById("p-change");
    pChange.innerHTML = "";
    pChange.classList.remove("blue");
    pChange.classList.remove("yellow");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`
    document.getElementById("img-emotion").classList.remove("hidden");
    //.style
}

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-color").value.trim().toLowerCase();
    const p = document.getElementById("p-mood-result");
    const error = document.getElementById("error-color");
    error.innerHTML = ""; //reset error
    let mood = "";

    if(color == "") {
        error.innerHTML = "* blank";
        return;
    }

    if(color == "red") {
        mood = "reb"
        p.style.color = color;
        return;
    }
    else if(color == "blue") {
        mood = "Its like blue so you're probably sad or something";
        p.style.color = color;
    }
    else if(color == "yellow") {
        mood = "Like sun I like the sun!";
        p.style.color = color;
    }

    if(mood == "") {
        error.innerHTML = "* Invalid color";
        return;
    }

    p.innerHTML = `You chose ${color}, so you are feeling ${mood}`;
}

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");

    if(ball.classList.contains("bounce")) {
        event.currentTarget.innerHTML = "Start";
    } else {
        event.currentTarget.innerHTML = "Stop";
    }

    ball.classList.toggle("bounce");
}
//On chnage

/* Counter */
let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");
const btnStart = document.getElementById("btn-count-start");
const btnStop = document.getElementById("btn-count-stop");
const btnReset = document.getElementById("btn-count-reset");
btnStop.disabled = true;
btnReset.disabled = true;

document.getElementById("btn-count-start").onclick = () => {
    btnStop.disabled = false;
    btnReset.disabled = false;
    btnStart.disabled = true;
    counterInterval = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
    }, 1000);
}

document.getElementById("btn-count-stop").onclick = () => {
    clearInterval(counterInterval);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

document.getElementById("btn-count-reset").onclick = () => {
    counter = 0;
    clearInterval(counterInterval);
    countP.innerHTML = counter;
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;
}

/* Donation stuff */
const goal = 10000;
document.getElementById("goal-span").innerHTML = goal;

document.getElementById("btn-donations").onclick = () => {
    const donation = document.getElementById("txt-donations").value;
    const errorSpan = document.getElementById("donation-error");
    const pPercentage = document.getElementById("percentage");
    errorSpan.innerHTML = "";
    pPercentage.innerHTML = "";

    if(isNaN(donation) || donation <= 0) {
        errorSpan.innerHTML = "* Invalid Amount."
        return;
    }

    const donationPercent = donation / goal * 100;

    if(donationPercent >= 100) {
        pPercentage.innerHTML = "Goal Reached";
    }
    else if(donationPercent >= 80) {
        pPercentage.innerHTML = "Were almost there";
    }
    else if(donationPercent >= 50) {
        pPercentage.innerHTML = "Over half way there";
    }
    else if(donationPercent >= 25) {
        pPercentage.innerHTML = "Keep Going";
    }
    else {
        pPercentage.innerHTML = "Lets get started";
    }

    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
}

