class Painting {
    constructor(name, artist, image, frame) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.frame = frame;
    };

    get item() {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("limitedSize")
        mainDiv.append(this.paragraph(this.name));
        const div = document.createElement("div");
        div.append(this.images(this.image));
        mainDiv.append(div);

        const paintings = document.getElementById("paintings");
        mainDiv.onclick = () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            const div2 = document.createElement("div")
            const span = document.createElement("span");
            span.innerHTML = "&times;";
            span.classList.add("close");
            div2.append(span);
            div2.append(this.paragraph(this.name));
            div2.append(this.paragraph(this.artist));
            const div3 = document.createElement("div");
            div3.append(this.images(this.image));
            if(this.frame) {
                div3.classList.add("border");
            }
            div2.append(div3);
            div2.classList.add("modal-content");
            modal.append(div2);
            paintings.append(modal);
            modal.style.display = "inline-block";

            span.onclick = () => {
                modal.remove();
            }
        };
        return mainDiv;
    };

    paragraph(text) {
        const p = document.createElement("p");
        p.innerHTML = text;
        return p;
    };

    images(img) {
        const img2 = document.createElement("img");
        img2.src = img;
        return img2;
    }
};

const paintings = [];
paintings.push(new Painting("The Bee", "Madilyn Mei", "images/bee.jpg", false));
paintings.push(new Painting("Dream love kitten", "The Happy Fits", "images/cat.jpg", true));
paintings.push(new Painting("Flowers and Butterflies", "The Technicolors", "images/flower.jpg", false));
paintings.push(new Painting("Forset Animals", "Shefu", "images/rabbitnbear.jpg", true));
paintings.push(new Painting("Its a dog", "Speak of the devil", "images/dog.jpg", false));

const paintingListDiv = document.getElementById("paintings");

paintings.forEach((paint) =>{
    paintingListDiv.append(paint.item);
});
