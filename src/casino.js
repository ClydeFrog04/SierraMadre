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
        "imgSrc": "img/SierraMadrePromo.jpg",
        "imgAlt": "Sierra Madre Casino Banner",
        "h4": "Sierra Madre Casino",
        "p": "The Sierra Madre casino is the highlight of the hotel. Fully equipped with holographic croupiers, the casino offers a number of games, including roulette, black jack, and slot machines, in addition to vending machines and a fully stocked bar!",
    },
    "mainContent": {
        "imgSrc": "img/SierraMadrePoster.jpg",
        "h4": "About the Casino",
        "p": "When you're done relaxing in your room, taking in the sights in villa, or enjoying shows in the theatre, come spend some time in our casino! In the casino, you can relax with a drink and play some games to pass the time. The casino can be thought of as a better Vault-Tec vault- a place with fresh air and caring people. We want you to think of us as your family and wind down, after all, we are living in a stressful world right now.",
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

setFavIcon();




//function definitions
function setFavIcon(){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = "favicon/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(link);
}

function createImg(src, alt, classes){
    let image = document.createElement('img');
    classes.forEach((classInClasses) => {
        image.classList.add(classInClasses);
    });
    return image;
}
/*
function someCreator(params){
element = document.createElement('tagName');

//set element stuff here, e.g. button.textContent = params.text;

element.classList.add('className');
//add more if needed

element.addEventListener(...);

return element;
}

container.appendChild(elements);
 */

/*
<header class="mainNavigation">
    <div class="container navContainer">
        <h1></h1>
        <nav class="nav">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
        </nav>
    </div>
</header>

<div class="container home">
    <header class="intro">
        <img src="" alt="">
        <div class="textContent">
            <h4></h4>
            <p></p>
        </div>
    </header>
    <section class="mainContent">
        <img src="" alt="">
        <div class="textContent">
            <h4></h4>
            <p></p>
        </div>
    </section>

</div><!--container-->
 */