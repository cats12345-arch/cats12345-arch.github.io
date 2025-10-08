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
    const popularBooks = document.getElementById("popular");
    const newBooks = document.getElementById("newBooks");
    books.forEach((book) => {
        if(book.popularBook) {
            const div = document.createElement("div");
            div.classList.add("center-div");
            const a = document.createElement("a");
            a.href = "book.html";

            const div2 = document.createElement("div");
            const img = document.createElement("img");
            img.src = `pictures/${book.imagePath}`;
            img.classList.add("in-center");
            div2.append(img);

            const h1 = document.createElement("h1");
            h1.innerHTML = book.name;

            const p = document.createElement("p");
            p.innerHTML = book.description;

            a.append(div2);
            a.append(h1);
            a.append(p);

            div.append(a);

            popularBooks.append(div);
        }

        if(book.newBook) {
            const div = document.createElement("div");
            div.classList.add("center-div");
            const a = document.createElement("a");
            a.href = "book.html";

            const div2 = document.createElement("div");
            const img = document.createElement("img");
            img.src = `pictures/${book.imagePath}`;
            img.classList.add("in-center");
            div2.append(img);

            const h1 = document.createElement("h1");
            h1.innerHTML = book.name;

            const p = document.createElement("p");
            p.innerHTML = book.description;

            a.append(div2);
            a.append(h1);
            a.append(p);

            div.append(a);

            newBooks.append(div);
        }
    })
}

showBooks();