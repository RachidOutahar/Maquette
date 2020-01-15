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

var slide = document.querySelector('.slide');
var option = document.querySelectorAll('.option');

var index = 1;
var size = slide[index].clientWidth;

update();

function update(){
    slide.style.transform = "translateX("+ (-size * index) +")";
}

window.addEventListener("scroll",function(){var off = window.pageYOffset;console.log(off)
});