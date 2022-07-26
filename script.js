
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



// <!-- ==========LIMITED TIME OFFER============== -->

var countDownDate = new Date("December 15, 2022 15:37:25").getTime();


var x = setInterval(function () {

    
    var now = new Date().getTime();

    
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



/*==================== SHOW HIDE ABOUT US DIVS ====================*/


function openInfo(evt, aboutName) {
  
  var i, tabcontent, tablinks;

  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(aboutName).style.display = "block";
  evt.currentTarget.className += " active";
}


// =============MENU PRODUCT FILTER===============//


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}





