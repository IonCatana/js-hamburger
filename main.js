// Selezionare il button hamburger menu
const buttonHamburger = document.querySelector('.header-right > a');
console.log(buttonHamburger);

// Selezionare il button close menu
const closeMenu = document.querySelector('.hamburger-menu > .close');
console.log(closeMenu);

// Seliozionare la Classe hamburger-menu
const burger = document.querySelector('.hamburger-menu');
console.log(burger);

// Creare l'apertura menu al click
buttonHamburger.addEventListener('click', function () {
  burger.style.display = 'block';
  // burger.classList.add("active")
});

// Creare chiusura menu al click
closeMenu.addEventListener('click', function () {
  burger.style.display = 'none';
  // burger.classList.remove("active")
});

// buttonHamburger.addEventListener('click', function () {
//   burger.toggle('active');
// });
//  Non capisco come usare il toggle.