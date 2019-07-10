//constructs the following html and insert it below the header div
/*
<div class="menu">
      <ul>
        <li>Students</li>
        <li>Faculty</li>
        <li>What's New</li>
        <li>Tech Trends</li>
        <li>Music</li>
        <li>Log Out</li>
      </ul>
    </div>
*/
function buildMenu() {
  let menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu');
  
  let listDiv = document.createElement('ul');
  
  function createList() {
      
  };
  let listItem = document.createElement('ul');
  
  listDiv.appendChild()
}
// Toggle
const toggleOn = () => {
  if (menu.classList.contains('slide-in-left')) {
    menu.classList.remove('slide-in-left');
    menu.classList.add('slide-out-left');
  } else {
    menu.classList.add('slide-in-left');
    menu.classList.remove('slide-out-left');
  }
};

// reference to the ".menu" class element
const menu= document.querySelector('.menu');
//reference to the ".menu-button" class element
const menuButton=document.querySelector('.menu-button');

//handles clicks
menuButton.addEventListener('click', () => {
  toggleOn();
});

//dont forget to add <script defer="defer" src="../components/Menu-slider/slider.js" async></script> in body of index.html