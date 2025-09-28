const catsBefore = [];
catsBefore["Bacon"] = "images/cat1_img1.jpg";
catsBefore["Bagel"] = "images/cat2_img1.jpg";
catsBefore["Bubba"] = "images/cat3_img1.jpg";
catsBefore["Bubbles"] = "images/cat4_img1.jpg";

const catsAfter = [];
catsAfter["Bacon"] = "images/cat1_img2.jpg";
catsAfter["Bagel"] = "images/cat2_img2.jpg";
catsAfter["Bubba"] = "images/cat3_img2.jpg";
catsAfter["Bubbles"] = "images/cat4_img2.jpg";

//inital variables
const body = document.getElementById("body");
const catContainer = document.getElementById("cat-container");

//There is surely an easier way to do this
// Mouse over effects so that it shows the banner that says to please adopt the cat


for(let cat in catsBefore) {
    const container = document.createElement("div");
    container.classList.add("box");
    const catimg = document.createElement("img");
    catimg.src = catsBefore[cat];
    const divtext = document.createElement("div");
    divtext.classList.add("absoluteCat");
    divtext.classList.add("hide");
    const text = document.createElement("p");
    text.innerHTML = `Please adopt ${cat}`;

    container.onmouseover = () => {
        divtext.classList.remove("hide");
    }
    container.onmouseleave = () => {
        divtext.classList.add("hide");
    }

    divtext.append(text);
    container.append(catimg);
    container.append(divtext);

    catContainer.append(container);

    catimg.onclick = () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        const absolute = document.createElement("div");
        absolute.classList.add("absolute");
        const aftertext = document.createElement("p");
        aftertext.innerHTML = `${cat} after adoption`;
        const span = document.createElement("span");
        span.innerHTML = "&#10006;";
        const divCatImg = document.createElement("div");
        const imgafter = document.createElement("img");
        imgafter.src = catsAfter[cat];

        divCatImg.append(imgafter)

        absolute.append(aftertext);
        absolute.append(span);
        absolute.append(divCatImg);

        popup.append(absolute);

        body.append(popup);
    
        span.onclick = () => {
            popup.remove();
        }
    }
}