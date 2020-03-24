const siteContent = {
    "nav": {
        "h1": "Sierra Madre",
        "navItem1": "About",
        "navItem2": "Villa",
        "navItem3": "Casino",
    },
    "intro": {
        //could possibly change the h4 to h3 if needed
        "imgSrc": "img/SierraMadreBanner.jpg",
        "imgAlt": "Sierra Madre Casino Banner",
        "h4": "Welcome to the Sierra Madre, Begin Again!",
        "p": "The Sierra Madre Casino and Villa, one of Frederick Sinclair's latest ventures. In this time of seemingly imminent war, Frederick Sinclair has decided to build a refuge for those seeking to begin again. With construction of the casino closing in on its final stages, it's time to take a look at what the Sierra Madre has to offer.",
    },
    "mainContent": {
        "imgSrc": "img/SierraMadreCasinoFront.jpg",
        "h4": "Grand Opening",
        "p": "Has your life taken a turn? Do troubles beset you? Has fortune left you behind? If so, the Sierra Madre Casino, in all its glory, is inviting you to begin again. Come to a place where wealth, excitement and intrigue await around every corner. Stroll along the winding streets of our beautiful resort, make new friends, or rekindle old flames. Let your eyes take in the luxurious expanse of the open desert under clear star-lit skies. Gaze straight on into the sunset from our villa rooftops. Countless diversions await: Gamble in our casino, take in the theater, or stay in one of our exclusive executive suites that will shelter you and cater to your every whim. So if life's worries have weighed you down, if you need an escape from your troubles, or if you just need an opportunity to begin again, join us, let go, and leave the world behind at the Sierra Madre grand opening this October... We'll be waiting.",
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
    navA.textContent = siteContent["nav"]["navItem" + navCounter++];
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