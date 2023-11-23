// A function that adds and remove the class "active" on the section you click on.
const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");

section1Element.addEventListener("click", toggle1);
section2Element.addEventListener("click", toggle2);
section3Element.addEventListener("click", toggle3);

const description1Element = document.getElementById("description1");
const description2Element = document.getElementById("description2");
const description3Element = document.getElementById("description3");

function toggle1(e) {
    const element = e.target
    const storedIndex = sessionStorage.getItem('randomPostIndex');
    let randomIndex;

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                randomIndex = storedIndex !== null ? parseInt(storedIndex, 10) : Math.floor(Math.random() * data.length);
                sessionStorage.setItem('randomPostIndex', randomIndex);

                const randomPostTitle = data[randomIndex].title;
                description1Element.innerHTML = `<p>${randomPostTitle}</p>`;
            } else {
                description1Element.innerHTML = "<p>No posts available</p>";
            }
        });

    section1Element.classList.toggle("active");
    if (description1Element.style.display === "none") {
        description1Element.style.display = "block";
    } else {
        description1Element.style.display = "none";
    }
}

function toggle2(e) {
    const element = e.target
    const storedIndex2 = sessionStorage.getItem('randomPostIndex2');
    let randomIndex2;

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                randomIndex2 = storedIndex2 !== null ? parseInt(storedIndex2, 10) : Math.floor(Math.random() * data.length);
                sessionStorage.setItem('randomPostIndex2', randomIndex2);

                const randomPostTitle2 = data[randomIndex2].title;
                description2Element.innerHTML = `<p>${randomPostTitle2}</p>`;
            } else {
                description2Element.innerHTML = "<p>No posts available</p>";
            }
        });

    section2Element.classList.toggle("active");
    if (description2Element.style.display === "none") {
        description2Element.style.display = "block";
    } else {
        description2Element.style.display = "none";
    }
}

function toggle3(e) {
    const element = e.target
    const storedIndex3 = sessionStorage.getItem('randomPostIndex3');
    let randomIndex3;

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                randomIndex3 = storedIndex3 !== null ? parseInt(storedIndex3, 10) : Math.floor(Math.random() * data.length);
                sessionStorage.setItem('randomPostIndex3', randomIndex3);

                const randomPostTitle3 = data[randomIndex3].title;
                description3Element.innerHTML = `<p>${randomPostTitle3}</p>`;
            } else {
                description3Element.innerHTML = "<p>No posts available</p>";
            }
        });

    section3Element.classList.toggle("active");
    if (description3Element.style.display === "none") {
        description3Element.style.display = "block";
    } else {
        description3Element.style.display = "none";
    }
}