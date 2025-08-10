hamBurger = document.querySelector(".hamburger");
navbar = document.querySelector(".nav-bar");
navbarList = document.querySelector(".nav-bar-list");

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

hamBurger.addEventListener("click", () => {
    navbarList.classList.toggle("visible");
    navbar.classList.toggle("nav-height");

});

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

