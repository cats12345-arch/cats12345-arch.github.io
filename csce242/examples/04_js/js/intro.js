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