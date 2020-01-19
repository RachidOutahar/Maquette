const scrolToTopBtn = document.querySelector("#scrolToTopBtn");

window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if(window.scrollY > 500) {
        scrolToTopBtn.style.display = "block";
    }
    else {
        scrolToTopBtn.style.display = "none"
    }
};

scrolToTopBtn.addEventListener("click", toTop);

function toTop() {
    window.scrollTo(0, 0);
};


window.addEventListener("scroll",function(){
    var off = window.pageYOffset;
    console.log(off)
});

let navbar = document.getElementById("navbarscrol");

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = "#494850";
    }
    else{
        navbar.style.backgroundColor = "transparent";
    }
}