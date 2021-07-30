const showMenu = document.getElementById("header__navbar");
const showMenu2 = document.getElementById("main_navbar");
const mosaic = document.getElementById("main__portfolio__mosaic");
const originalURL = './src/data_portfolio.json';
let urlArray;

function displayMenu() {
    if (showMenu.style.display === "none") {
        showMenu.style.display = "flex";
    } else {
        showMenu.style.display = "none";
    }
}

function displayMenu2() {
    if (showMenu2.style.display === "none") {
        showMenu2.style.display = "flex";
    } else {
        showMenu2.style.display = "none";
    }
}


fetch(originalURL)
    .then(function(response) {

        const jsonFormat = response.json();
        return jsonFormat
    }).then(function(jsonFormat) {

        let imgArray = Array.from(jsonFormat.images);
        console.log('Aqui estamos después: ', imgArray);
        return imgArray;
    }).then(function(imgArray) {
        let urlArray = imgArray.map(a => {
            let img = document.createElement("img");
            img.setAttribute("src", `${a.url}`)
            img.setAttribute("class", "grid-item")
            mosaic.appendChild(img);
        });
    }).catch(error => {
        if (error.status === 404) {
            console.log("Error 404")
        }
    })