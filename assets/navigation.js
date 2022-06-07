"use strict";

const currentWindow = window.location.pathname.split("/").pop();
const navTabs = document.querySelectorAll(".nav__link");
if (currentWindow == "index.html") {
    for (let i = 0; i < navTabs.length; i++) {
        if (navTabs[i].dataset.tab == 0) {
            navTabs[i].classList.add("nav__active");
        }
    }
} else if (currentWindow == "calendar.html") {
    for (let i = 0; i < navTabs.length; i++) {
        if (navTabs[i].dataset.tab == 1) {
            navTabs[i].classList.add("nav__active");
        }
    }
}

//website loop
let websiteLoop = setInterval(() => {
    const scrollTop = document.querySelector("html").scrollTop;
    const stickyNav = document.querySelector(".sticky__nav");
    if (scrollTop > 100) {
        stickyNav.style.display = "flex";
    } else {
        stickyNav.style.display = "none";
    }
}, 3);