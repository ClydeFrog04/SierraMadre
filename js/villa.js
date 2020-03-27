const siteContent = {
    "nav": {
        "h1": "Sierra Madre",
        "navItem1": "About",
        "target1": "index.html",
        "navItem2": "Villa",
        "target2": "villa.html",
        "navItem3": "Casino",
        "target3": "casino.html",
    },
    "intro": {
        //could possibly change the h4 to h3 if needed
        "imgSrc": "img/SierraMadreBeforeTheWar.png",
        "imgAlt": "Sierra Madre Casino Banner",
        "h4": "Sierra Madre Villa",
        "p": "At the Sierra Madre Casino and Villa, we want your stay to be safe and luxurious. That's why we made the Villa. The Sierra Madre Villa is your new home. Once you step inside your room you'll find yourself relaxing like you never new possible.",
    },
    "mainContent": {
        "imgSrc": "img/SierraMadreSideBarPoster.jpg",
        "h4": "About the Villa",
        "p": "The Villa is our take on a village. Each building is connected by narrow streets so you can get from your room to the theater or casino with ease. The narrow streets prevents vehicle access, so you can rest without the noise and polution of a city. On every corner of the Villa streets you'll find our Sierra Madre vending machines developed for us by the Big MT, which dispenses numerous items in exchange for Sierra Madre chips, the last currency you'll ever need.",
    },
    "contact": {
        "contact-h4" : "Contact",
        "address" : "NVDLC01fountain, Mojave Nevada",
    },
    "footer": {
        "copyright" : "FONV Dead Money",
        "altCopyright": "FONV Sierra Madre",
    },
};

//navbar setup
const navh1 = document.querySelector("h1");
navh1.textContent = siteContent["nav"]["h1"];

const navAs = document.querySelectorAll(".container.navContainer a");
console.log(navAs.length);
let navCounter = 1;
navAs.forEach((navA) =>{
    navA.textContent = siteContent["nav"]["navItem" + navCounter];
    navA.setAttribute("href", siteContent["nav"]["target" + navCounter++]);
});


//intro content
const introImg = document.querySelector(".intro img");
introImg.setAttribute("src", siteContent["intro"]["imgSrc"]);
introImg.setAttribute("alt", siteContent["intro"]["imgAlt"]);

const introh4 = document.querySelector(".intro .textContent h4");
introh4.textContent = siteContent["intro"]["h4"];
const introp = document.querySelector(".intro .textContent p");
introp.textContent = siteContent["intro"]["p"];


//main content
const mainImg = document.querySelector(".mainContent img");
mainImg.setAttribute("src", siteContent["mainContent"]["imgSrc"]);
mainImg.setAttribute("alt", siteContent["mainContent"]["imgAlt"]);

const mainh4 = document.querySelector(".mainContent .textContent h4");
mainh4.textContent = siteContent["mainContent"]["h4"];
const mainp = document.querySelector(".mainContent .textContent p");
mainp.textContent = siteContent["mainContent"]["p"];