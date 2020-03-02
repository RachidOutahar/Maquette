
let prevBtn = document.getElementsByClassName("CardCarousel-nav-prev")[0];
let nextBtn = document.getElementsByClassName("CardCarousel-nav-next")[0];

const _CONT = document.getElementById("slideOne");
const _CONT_SCROLL_X = _CONT.scrollWidth;
const _CONT_ELEMNT_SCROLL_VALUE = _CONT_SCROLL_X / _CONT.children.length;

// 

console.log(_CONT_SCROLL_X);
console.log(_CONT_ELEMNT_SCROLL_VALUE);

let currentPosition = 0;

nextBtn.addEventListener("click",function() {
    scroll(true);
});
prevBtn.addEventListener('click',()=>{
    scroll(false);
});

// 

function scroll(direction){
    if(direction == true){
        currentPosition = currentPosition + _CONT_ELEMNT_SCROLL_VALUE * 1;
        if(currentPosition >= _CONT_SCROLL_X){
            currentPosition = _CONT_SCROLL_X;
        }
        // if(currentPosition > _CONT_SCROLL_X){
            // currentPosition == _CONT_SCROLL_X;
        // }
        
    }
    else{
        currentPosition = currentPosition - _CONT_ELEMNT_SCROLL_VALUE * 1;
        if(currentPosition < 0)
            currentPosition = 0;
    }
    //
    _CONT.scrollTo(currentPosition,0);
}

//

const sliders = document.getElementById("slideTow");
let prevBtntow = document.getElementById("prev_slide_tow");
let nextBtntow = document.getElementById("next_slide_tow");
const slider_SCROLL_X = sliders.scrollWidth;
const slider_ELEMNT_SCROLL_VALUE = slider_SCROLL_X / sliders.children.length;


nextBtntow.addEventListener("click",()=>{
    console.log("clicked");
    scrollsliderTow(true);
});
prevBtntow.addEventListener('click',()=>{
    scrollsliderTow(false);

});
 let sTwoCouter = 0;

function scrollsliderTow(direction){
    if(direction == true){
        
        sTwoCouter = sTwoCouter + slider_ELEMNT_SCROLL_VALUE * 1;
        if(sTwoCouter >= slider_SCROLL_X)
        sTwoCouter = slider_SCROLL_X;

    }
    else{
        sTwoCouter = sTwoCouter - slider_ELEMNT_SCROLL_VALUE * 1;
        if(sTwoCouter < 0)
        sTwoCouter = 0;
    }
    // 
    sliders.scrollTo(sTwoCouter,0);
}

const popupbox= document.getElementById("popupbox");
const card= document.querySelectorAll(".class_img");

for(var i=0;i<card.length;i++)
{
    card[i].addEventListener("click", ()=>{
        popupbox.style.display = "block";
    })

}


const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", ()=>{
    popupbox.style.display = "none";
})

///////

function validate() {
      
    if( document.getElementById('FirstName').value == "" ) {
       alert( "Please provide your name!" );
       document.getElementById('FirstName').focus() ;
       return false;
    }
    if( document.getElementById('LastName').value == "" ) {
       alert( "Please provide your name!" );
       document.getElementById('LastName').focus() ;
       return false;
    }
    if( document.getElementById('Email').value == "" ) {
       alert( "Please provide your Email!" );
       document.getElementById('Email').focus() ;
       return false;
    }
    else{
      validateEmail();
    }
    if( document.getElementById('CreatePassword').value == "" )
    {
       alert( "Please provide a Password with 8 Caracter at least" );
       document.getElementById('CreatePassword').focus() ;
       return false;
    }
    else if( document.getElementById('ConfirmPassword').value != document.getElementById('CreatePassword').value )
    {
       alert( "Password Not matching" );
       document.getElementById('ConfirmPassword').focus() ;
       return false;
    }
    
    if( document.getElementById('city').value == "" ) {
       alert( "Please provide your City!" );
       document.getElementById('city').focus() ;
       return false;
    }
    if( document.getElementById('phone').value == "" ) {
       alert( "Please provide your Phone number!" );
       document.getElementById('phone').focus() ;
       return false;
    }
   confirmform();
   rempconfirmform();
    return( true );
    
 }



function validateEmail() {
       var emailID = document.getElementById("Email").value;
        var atpos = emailID.indexOf("@");
       var dotpos = emailID.lastIndexOf(".");
       
       if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct email ID")
          document.myForm.EMail.focus() ;
          return false;
       }
       return( true );
       
    }
