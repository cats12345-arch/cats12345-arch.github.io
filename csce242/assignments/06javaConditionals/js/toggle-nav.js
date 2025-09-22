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
    const numdays = document.getElementById("numberDays");
    const status = document.getElementById("status");
    console.log(days);
    if(days <= 2) {
        flower.src="images/plant1.jpeg";
        numdays.innerHTML=`It's been ${days} since watering your plant`;
        status.innerHTML="your plant is healthy and happy";
    }
    else if(days <= 5) {
        flower.src="images/plant2.jpg";
        numdays.innerHTML=`It's been ${days} since watering your plant`;
        status.innerHTML="Your plant needs watering";
    }
    else if(days <= 9) {
        flower.src="images/plant3.jpg";
        numdays.innerHTML=`It's been ${days} since watering your plant`;
        status.innerHTML="Leaves are droppering the color is changing, water soon";
    }
    else {
        flower.src="images/plant4.png";
        numdays.innerHTML=`It's been ${days} since watering your plant`;
        status.innerHTML="Sorry, your plant is no longer with us";
    }
}

function updateTime() {
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    hour = String(hour).padStart(2, '0');
    min = String(min).padStart(2, '0');
    const pChange = document.getElementById("pChange");
    if(hour == 12) {
        pChange.innerHTML = `${hour}:${min} pm`;
    }
    
    if(hour >= 13) {
        hour -= 12;
        pChange.innerHTML = `${hour}:${min} pm`;;
    }
    else {
        pChange.innerHTML = `${hour}:${min} am`;
    }

    
}

updateTime();
setInterval(updateTime, 60000);