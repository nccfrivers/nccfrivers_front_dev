

const navMenu = document.getElementById("nav_menu_item"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");


/*=============== SHOW MENU ===============*/
/* validate if constant exists  */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".menu_links");

function linkAction() {
    navMenu.classList.remove("show-menu")
    // navToggle.style.display = "block";
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  


