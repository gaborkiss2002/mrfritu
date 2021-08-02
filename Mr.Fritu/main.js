"use strict"

if (window.innerWidth<=992) {
    document.querySelector("nav").classList.remove("wrapper");
    document.querySelector("nav").classList.add("buttonPosition");
    
    for (let i = 0; i < document.querySelectorAll(".nav-item").length; i++) {
        document.querySelectorAll(".nav-item")[i].classList.remove("me-3");
    }
}