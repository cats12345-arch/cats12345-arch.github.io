document.getElementById("toggle-nav").onclick = () => {
    const nav = document.getElementById("nav-items");
    nav.classList.toggle("hide-small");
    nav.classList.remove("triangle-down");
    nav.classList.add("triamgle-up");
}