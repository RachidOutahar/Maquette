var _contact_box_open = document.getElementById('exp');
var _contact_Box = document.getElementById('contact-box');
_contact_box_open.addEventListener("click", ()=>{
     console.log("mesage");
    _contact_Box.style.display = "block";
});

var _close_btn = document.getElementsByClassName('close');
_close_btn[0].addEventListener("click", ()=>{
    _contact_Box.style.display = "none";
});




////
const _menu_Icon = document.querySelector("#nav-menu-icon");
const _menu_Site = document.querySelector(".site-header-menu");
const _menu_Site_Open = document.querySelector(".site-header-menu-container");
var _nav_icon_close = document.querySelector('.nav-menu-icon-close');



_menu_Icon.addEventListener("click", ()=>{
    if(_menu_Site.style.display == "none")
    {
        console.log("clicked");
        _menu_Site.style.display = "block";
        _menu_Site_Open.style.display = "block";
    }
    else
    {
        _menu_Site.style.display = "none";
        _menu_Site_Open.style.display = "none";
    }
})
