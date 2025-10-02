const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("Sorry");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>{
        //make a section for each shoe put all the data in nicely formatted
        //then append it to the shoe list
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.innerHTML = shoe.brand;
        div.append(h1);
        const p = document.createElement("p");
        p.innerHTML = `Name: ${shoe.name}`
        div.append(p);
        const ul = document.createElement("ul");
        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });
        div.append(ul);
        shoeListDiv.append(div);
        //image
        //const img = document.createElement("img");
        //div.append(img);
        //img.src "filepath"

        console.log(shoe.name);
    });
};

showShoes();