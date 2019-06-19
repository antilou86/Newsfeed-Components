
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if (menu.classList.contains('slide-in-left')) {

    menu.classList.remove('slide-in-left', true);
    menu.classList.add('slide-out-left');
  } else {
    menu.classList.add('slide-in-left');
  
  }
};

// Start Here: Create a reference to the ".menu" class
const menu= document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton=document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu();
})

