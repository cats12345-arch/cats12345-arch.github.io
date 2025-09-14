document.getElementById("click").onclick = () => {
    document.getElementById("sun").classList.remove("hide");
}

document.getElementById("favcolor").onchange = (e) => {
    const pChange = document.getElementById("hex");
    let pColor = e.target.value;
    document.getElementById("hexValue").classList.remove("hide");
    console.log(pColor);
    pChange.innerHTML = pColor + "";
    pChange.style.color = pColor;
    document.getElementById("text").style.color = pColor;
}

document.getElementById("image-change").onclick = () => {
    document.getElementById("imageid").src="images/cartoonSun.jpg";
}
