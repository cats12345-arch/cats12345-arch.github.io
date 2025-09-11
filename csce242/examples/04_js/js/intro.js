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
