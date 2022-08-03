gsap.registerPlugin(ScrollTrigger);

/*  Makes the images scroll up on the landing page  */
function layeredPinning() {
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
      pinSpacing: false,
      snap: {
        snapTo: 1,
        duration:1
      }
    });
  });

}

/*  Controls the Page Navigation for the locations */
function setUpLocations(){
  document.querySelectorAll('.location__button').forEach(button => {
    button.addEventListener('click', () => {
      const navLocations = button.parentElement;
      const locations = navLocations.parentElement;
      /*  The next two lines match the selected link to its corrosponding location  */
      const locationNumber = button.dataset.forLocation;
      const locationToActivate = locations.querySelector(`.location__content[data-location="${locationNumber}"]`);

      navLocations.querySelectorAll('.location__button').forEach(button => {
        button.classList.remove('location__button-active');
      });

      locations.querySelectorAll('.location__content').forEach(location => {
        location.classList.remove('location__content-active');
      });

      button.classList.add('location__button-active');
      locationToActivate.classList.add('location__content-active');

    })
  })
}

function setUpMenu(){

  document.querySelectorAll('.menu__button').forEach(button => {
    button.addEventListener('click', () => {
      const navMenu = button.parentElement;
      const menu = navMenu.parentElement;
      /*  The next two lines match the selected link to its corrosponding menu item  */
      const menuNumber = button.dataset.forMenu;
      const menuToActivate = menu.querySelector(`.menu__items[data-menu="${menuNumber}"]`);


      navMenu.querySelectorAll('.menu__button').forEach(button => {
        button.classList.remove('menu__button-active');
      });

      menu.querySelectorAll('.menu__items').forEach(menu => {
       menu.classList.remove('menu__items-active');
      });

      button.classList.add('menu__button-active');
      menuToActivate.classList.add('menu__items-active');

    })
  })
}

function setUpVahi(){

  document.querySelectorAll('.menu__buttonVahi').forEach(button => {
    button.addEventListener('click', () => {
      const navMenu = button.parentElement;
      const menu = navMenu.parentElement;

      /*  The next two lines match the selected link to its corrosponding section  */
      const menuNumber = button.dataset.forMenu;
      const menuToActivate = menu.querySelector(`.menu__items[data-menu="${menuNumber}"]`);

      navMenu.querySelectorAll('.menu__buttonVahi').forEach(button => {
        button.classList.remove('menu__buttonVahi-active');
      });

      menu.querySelectorAll('.menu__items').forEach(menu => {
        menu.classList.remove('menu__items-active');
      });

      button.classList.add('menu__buttonVahi-active');
      menuToActivate.classList.add('menu__items-active');
    })
  })
}

function init(){

  layeredPinning();
  setUpLocations();
  setUpMenu();
  setUpVahi();

}

window.addEventListener('load', function(){
  init();
});
