document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    const ul2 = document.createElement("ul");
    displaySection.append(ul);
    displaySection.append(ul2);

    //loop and write the numbers one through 10
    for(let i=0; i < 7; i++) {
        const li2 = document.createElement("li");
        const li = document.createElement("li");
        li.classList.add("cloud");
        li2.classList.add("tree");
        ul2.append(li2)
        ul.append(li);
    }
}