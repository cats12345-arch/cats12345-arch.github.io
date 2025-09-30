class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");


        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        const arrow = document.createAttribute("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);

        const div = document.createElement("div");
        div.classList.add("columns")

        const div2 = document.createElement("div");
        const div3 = document.createElement("div");

        div3.append(this.paragrpah("Breed", this.breed));
        div3.append(this.paragrpah("Size", this.size));
        div3.append(this.paragrpah("Age", this.age))
        div3.classList.add("transparent");

        div2.append(this.picture(this.pic));

        div.append(div2);
        div.append(div3);
        
        section.append(div);

        arrow.onclick = (e) => {
            e.preventDefault(); //dont go to destination of link
            div3.classList.toggle("transparent")
        };

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = filename;
        return img
    }

    paragrpah(key, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "images/classes/yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "images/classes/golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "large", "images/classes/pitt-bull.jpg"));

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
});
