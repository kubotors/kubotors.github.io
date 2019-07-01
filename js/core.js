document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var sidenavInit = M.Sidenav.init(sidenav, {});
  var collapsible = document.querySelectorAll('.collapsible');
  var collapsibleInit = M.Collapsible.init(collapsible, {});
  var dropdown = document.querySelectorAll('.dropdown-trigger');
  var dropdownInit = M.Dropdown.init(dropdown, {coverTrigger: false, constrainWidth: true, alignment: 'right', hover: true});
});

$('.images').slick({infinite: true, speed: 300, slidesToShow: 1, adaptiveHeight: false, variableWidth: false, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000});
$('.phases').slick({infinite: true, speed: 300, slidesToShow: 1, adaptiveHeight: false, variableWidth: false});

$(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1);
         return false;
       }
     }
   });
 });

 function toggle() {
   var theme = document.getElementById("toggle");
   if (theme.className == "dark-mode") {
     theme.className = "light-mode";
     document.getElementById("intro-panel").className = "";
     document.getElementById("training-panel").className = "";
     document.getElementById("phases-heading").className = "center black-text";
     document.getElementById("phases-heading-2").className = "center black-text";
     document.getElementById("clients-panel").className = "";
     document.getElementById("events-panel").className = "";
     document.getElementById("about-panel").className = "";
     document.getElementById("blog-panel").className = "";
     document.getElementById("follow-panel").className = "";
   } else {
     theme.className = "dark-mode";
     document.getElementById("intro-panel").className = "card-panel grey darken-4 red-hoverable white-text";
     document.getElementById("training-panel").className = "card-panel grey darken-4 red-hoverable white-text";
     document.getElementById("phases-heading").className = "center white-text";
     document.getElementById("phases-heading-2").className = "center white-text";
     document.getElementById("clients-panel").className = "card-panel grey darken-4 red-hoverable white-text";
     document.getElementById("events-panel").className = "card-panel grey darken-4 red-hoverable white-text";
     document.getElementById("about-panel").className = "card-panel grey darken-4 red-hoverable white-text";
     document.getElementById("blog-panel").className = "card-panel grey darken-4 red-hoverable white-text";
     document.getElementById("follow-panel").className = "card-panel grey darken-4 red-hoverable white-text";
   }
 };
