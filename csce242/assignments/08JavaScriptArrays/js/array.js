const catsBefore = [];
catsBefore["Bacon"] = "images/cat1_img1.png";
catsBefore["Bagel"] = "images/cat2_img1.png";
catsBefore["Bubba"] = "images/cat3_img1.png";
catsBefore["Bubbles"] = "images/cat4_img1.png";

const catsAfter = [];
catsAfter["Bacon"] = "images/cat1_img2.png";
catsAfter["Bagel"] = "images/cat2_img2.png";
catsAfter["Bubba"] = "images/cat3_img2.png";
catsAfter["Bubbles"] = "images/cat4_img2.png";

//inital variables
const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");
const cat4 = document.getElementById("cat4");

const banner1 = document.getElementById("absolute1");
const banner2 = document.getElementById("absolute2");
const banner3 = document.getElementById("absolute3");
const banner4 = document.getElementById("absolute4");

const popup = document.getElementById("popup");
const closes = document.getElementById("close");
const catname = document.getElementById("name");
const catImage = document.getElementById("image")

//There is surely an easier way to do this
// Mouse over effects so that it shows the banner that says to please adopt the cat
cat1.onmouseover = () => {
    banner1.classList.remove("hide");
}

cat2.onmouseover = () => {
    banner2.classList.remove("hide");
}

cat3.onmouseover = () => {
    banner3.classList.remove("hide");
}

cat4.onmouseover = () => {
    banner4.classList.remove("hide");
}

cat1.onmouseleave = () => {
    banner1.classList.add("hide");
}

cat2.onmouseleave = () => {
    banner2.classList.add("hide");
}

cat3.onmouseleave = () => {
    banner3.classList.add("hide");
}

cat4.onmouseleave = () => {
    banner4.classList.add("hide");
}

cat1.onclick = () => {
    popup.classList.remove("hide");
    

}

closes.onclick = () => {
    popup.classList.add("hide");
}