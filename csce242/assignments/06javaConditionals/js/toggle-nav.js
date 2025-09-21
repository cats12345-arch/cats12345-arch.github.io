document.getElementById("toggle-nav").onclick = (event) => {
    const nav = document.getElementById("nav-items");
    nav.classList.toggle("hide-small");
    const triangle = document.getElementById("toggle-nav");
    
    triangle.classList.toggle("triangle-down");
    triangle.classList.toggle("triangle-up");
}

document.getElementById("exercise-1").onclick = () => {
    document.getElementById("plants").classList.remove("hide");
    document.getElementById("clock").classList.add("hide");
}

document.getElementById("exercise-2").onclick = () => {
    document.getElementById("clock").classList.remove("hide");
    document.getElementById("plants").classList.add("hide");
}

document.getElementById("myRange").onclick = () => {
    let days = document.getElementById("myRange").value;
    const flower = document.getElementById("flower");
    console.log(days);
    if(days <= 2) {
        flower.src="images/plant1.jpeg";
    }
    else if(days <= 5) {
        flower.src="images/plant2.jpg";
    }
    else if(days <= 9) {
        flower.src="images/plant3.jpg";
    }
    else {
        flower.src="images/plant4.png";
    }
}

function updateTime() {
        console.log("please work");
    let hour = new getHours();
    const min = new getMinutes();
    const pChange = document.getElementById("pChange");
    if(hour == 12) {
        pChange.innerHTML = hour + ":" + min + " pm";
    }
    if(hour >= 13) {
        hour -= 12;
        pChange.innerHTML = hour + ":" + min + " pm";
    }
    else {
        pChange.innerHTML = hour + ":" + min + " am";
    }
}