// JavaScript Document
let span = document.querySelector('span');
let hamburger = document.querySelector('header');


hamburger.addEventListener('click', function() {
  span.classList.toggle('active');
}, false);


//Dropdown in footer

// https://www.tutorialspoint.com/how-to-create-a-clickable-dropdown-menu-with-css-and-javascript

// Aanmaken van variabelen
let dropdownMenu = document.querySelector('.dropdown-btn');
let hiddenMenu = document.querySelector('.hiddenmenu');

// Aanmaken van de fuctie: Als er wordt op de de knop met de klas .menu-btn, dan wordt krijgt het artibuur de waarde 'block' en wordt het element zichtbaar. Als er nog een keer wordt gedrukt, verdwijnt het element weer.
dropdownMenu.addEventListener('click',()=>{
   if(hiddenMenu.style.display===""){
      hiddenMenu.style.display="block";
   } else {
      hiddenMenu.style.display="";
   }
})


//Dropdown in footer

// https://www.tutorialspoint.com/how-to-create-a-clickable-dropdown-menu-with-css-and-javascript

// Aanmaken van variabelen
let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');

// Aanmaken van de fuctie: Als er wordt op de de knop met de klas .menu-btn, dan wordt krijgt het artibuur de waarde 'block' en wordt het element zichtbaar. Als er nog een keer wordt gedrukt, verdwijnt het element weer.
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})
