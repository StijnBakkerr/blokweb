// JavaScript Document



//Bron: Dit stuurde Janno Kapritsias als voorbeeld om te gebruiken in MS

// Aanmaken van variabelen door in het de html en css een selector te targeten
let span = document.querySelector('span');
let hamburger = document.querySelector('header');

// Hier wordt de funtie aangeroepen. Als er wordt geklikt op het hamburger menu wordt de class active van het element aangeroepen. Als er weer wordt geklikt wordt het weer gedeactiveerd.
hamburger.addEventListener('click', function() {
  span.classList.toggle('active');
}, false);






//Dropdown in footer

// https://www.tutorialspoint.com/how-to-create-a-clickable-dropdown-menu-with-css-and-javascript

// Aanmaken van variabelen door in het de html en css een selector te targeten
let dropdownMenu = document.querySelector('.dropdown-btn');
let hiddenMenu = document.querySelector('.hiddenmenu');

// Aanmaken van de fuctie: Als er wordt gedrukt op de de knop met de klas .dropdown-btn, dan wordt krijgt het artibuur de waarde 'block' en wordt het element zichtbaar. Als er nog een keer wordt gedrukt, verdwijnt het element weer.
dropdownMenu.addEventListener('click',()=>{
   if(hiddenMenu.style.display===""){
      hiddenMenu.style.display="block";
   } else {
      hiddenMenu.style.display="";
   }
})




//Verborgen menu achter hamburger knop


// https://www.tutorialspoint.com/how-to-create-a-clickable-dropdown-menu-with-css-and-javascript

// Aanmaken van variabelen door in het de html en css een selector te targeten
let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');

// Aanmaken van de fuctie: Als er wordt gedrukt op de de knop met de klas .menu-btn, dan wordt krijgt het artibuur de waarde 'block' en wordt het element zichtbaar. Als er nog een keer wordt gedrukt, verdwijnt het element weer.
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})
