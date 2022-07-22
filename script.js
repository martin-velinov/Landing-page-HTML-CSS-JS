
// ======================MODAL===================//

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ======================SLIDER===================//



const slides = document.querySelectorAll(".slide");


slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});


const nextSlide = document.querySelector(".btn-next");


let currentSlide = 0;

let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

 
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});


const prevSlide = document.querySelector(".btn-prev");


prevSlide.addEventListener("click", function () {
  
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }


  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});



/*==================== MOBILE MENU ====================*/

  
function mobileNav() {
  var mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    
  } else {
    mobileMenu.style.display = "block";
  }
}

//DARK THEME

function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark");
}