document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    const div = document.createElement("ul");
    displaySection.innerHTML = "";
    displaySection.append(ul);
    displaySection.append(div);
    

    //loop and write the numbers one through 10
    for(let i=0; i < 6; i++) {
        const p = document.createElement("p");
        const li = document.createElement("li");
        li.classList.add("cloud");
        p.classList.add("tree");
        div.append(p);
        ul.append(li);
    }
};

function time() {
    const time = new Date();
    let hour = time.getHours();
    const body = document.getElementById("body");
    const sunMoon = document.getElementById("sun-moon");
    if(hour <= 6) {
        body.classList.remove("day");
        body.classList.add("night");
        sunMoon.classList.add("moon");
    }
    else if((hour > 6) && (hour <= 18)) {
        body.classList.add("day");
        body.classList.remove("night");
        sunMoon.classList.add("sun");
    }
    else {
        body.classList.remove("day");
        body.classList.add("night");
        sunMoon.classList.add("moon");
    }

};

time();
setInterval(time, 600000);