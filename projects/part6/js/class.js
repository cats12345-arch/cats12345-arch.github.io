const getBooks = async() => {
    const url = "https://cats12345-arch.github.io/json/books.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("Sorry");
    }
}

const showBooks = async() => {
    const books = await getBooks();
    const browsediv = document.getElementById("Browse");

    books.forEach((book)=>{
        const div = document.createElement("div");
        div.classList.add("center-div");
        const a = document.createElement("a");
        a.href = "book.html";

        const div2 = document.createElement("div");
        const img = document.createElement("img");
        img.src = book.imagePath;

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

        div.append(div2);
        div.append(h1);
        div.append(h1_2);
        div.append(p);
        div.append(p2);
        div.append(p3);

        div.append(a);

        browsediv.append(div);
    })
}

showBooks();