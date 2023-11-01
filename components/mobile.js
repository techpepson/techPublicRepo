//This is a js code for the navigation button which displays  for screen sizes that fit mobile description
function MobileNav() {
  //Calling the mobile nav container and the bars icon
  const mobileNav = document.querySelector(".mobile-nav__container");
  const barsIcon = document.querySelector(".bars-icon");

  const mobileNavLinks = document.querySelectorAll(".mobile-nav__button");

  const homePage = document.querySelectorAll(".navs__menu");

  //State
  let isNavOpen = false;

  //Logic for displaying the mobile nav when clicked!
  barsIcon.addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
      mobileNav.style.display = "flex";
      barsIcon.style.color = "var(--clr-light-blue)";
      document.body.style.overflow = "hidden";
    } else {
      if (!isNavOpen) {
        mobileNav.style.display = "none";
        barsIcon.style.color = "var(--clr-dark)";
        document.body.style.overflowY = "auto";
      }
    }
  });

  //End of logic for displaying the mobile nav when clicked!

  //Logic for hiding the mobile nav  when any of the mobile nav buttons is clicked!
  mobileNavLinks.forEach((links) => {
    links.addEventListener("click", () => {
      isNavOpen = false;
      mobileNav.style.display = "none";
      barsIcon.style.color = "var(--clr-dark)";
      document.body.style.overflowY = "auto";
    });
  });
  //End of logic for hiding the mobile nav when any of the mobile nav buttons is clicked!

  //The logic for changing the title when any of the nav buttons is clicked!

  homePage.forEach((home) => {
    home.addEventListener("click", (e) => {
      document.title = e.target.innerText + "- Ankin Apparel";
    });
  });
  //End of logic for changing the title when any of the nav buttons is clicked!
}

export default MobileNav;
