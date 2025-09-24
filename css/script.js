
const header = document.querySelector("header");


window.onscroll = function() {
    if (window.scrollY > 50) { 
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
};


header.onmouseover = function() {
    header.classList.remove("scroll"); 
};


header.onmouseout = function() {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    }
};
