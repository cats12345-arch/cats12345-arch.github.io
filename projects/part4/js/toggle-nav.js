document.getElementById("toggle-nav").onclick = (event) => {
    const nav = document.getElementById("nav-items");
    
    if(nav.classList.contains("hide")) {
        nav.classList.remove("hide");
    }
    else {
        nav.classList.add("hide");
    }
    const triangle = document.getElementById("toggle-nav");
    
    triangle.classList.toggle("triangle-down");
    triangle.classList.toggle("triangle-up");
}