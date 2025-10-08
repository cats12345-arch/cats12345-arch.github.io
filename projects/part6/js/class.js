const getBooks = async() => {
    const url = "https://cats12345-arch.github.io/json/books.json";

    try {
        const response = await fetch(url);
        setTimeout(console.log("maybe this will fix the JSON issue??"), 500);
        return response.json();
    }
    catch(error) {
        console.log("Sorry");
    }
}

const showBooks = async() => {
    const books = await getBooks();
    const browsediv = document.getElementById("browse");

    books.forEach((book)=>{
        const div = document.createElement("div");
        div.classList.add("center-div");
        const a = document.createElement("a");
        a.href = "book.html";

        const div2 = document.createElement("div");
        const img = document.createElement("img");
        img.src = `pictures/${book.imagePath}`;

        div2.append(img);

        const h1 = document.createElement("h1");
        h1.innerHTML = book.name;

        const h1_2 = document.createElement("h1");
        h1_2.innerHTML = book.author;

        const p = document.createElement("p");
        p.innerHTML = book.price;

        const p2 = document.createElement("p");
        p2.innerHTML = book.releaseDate;

        const p3 = document.createElement("p");
        p3.innerHTML = book.description

        a.append(div2);
        a.append(h1);
        a.append(h1_2);
        a.append(p);
        a.append(p2);
        a.append(p3);

        div.append(a);

        browsediv.append(div);
    });
}

showBooks();