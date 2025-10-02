class Painting {
    constructor(name, artist, image, frame) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.frame = frame;
    }

    get item() {
        const mainDiv = document.createElement("div");

        const div = document.createElement("div");
        div.append
    }

    paragraph(text) {
        const p = document.createElement("p");
        p.innerHTML = text;
        return p;
    }
}

const paintings = [];
paintings.push(new Painting("The Bee", "Madilyn Mei", "images/bee.jpg", false));
paintings.push(new Painting("Dream love kitten", "The Happy Fits", "images/cat.jpg", true));
paintings.push(new Painting("Flowers and Butterflies", "The Technicolors", "images/flower.jpg", false));
paintings.push(new Painting("Forset Animals", "Shefu", "images/rabbitnbear.jpg", true));

const paintingListDiv = document.getElementById("paintings");

paintings.forEach((paint) =>{
    paintingListDiv.append(paint.item);
});
