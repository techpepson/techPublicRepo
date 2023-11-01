//This is the logic to display the navs upon clicking the  bars icon
function menMobile() {
    const mobileBars = document.querySelector(".bars-icon");
    const navsContainer = document.querySelector(".mobile-nav__container");
    const mobileNavs = document.querySelector(".mobile__navs");
    const mobileNavsContainer = document.querySelector('.mobile-nav__container');
    const slider = document.querySelector(".sliding-images");
    const chevronButton = document.querySelector(".chevron-button-container")

    //State for the mobile nav
    let isNavOpen = false;
    mobileBars.addEventListener("click", () => {
        isNavOpen = !isNavOpen
        if (isNavOpen) {
            mobileNavs.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            slider.style.display = "none";
            chevronButton.style.display = "none";
        }
        else {
            if (!isNavOpen) {
                mobileNavs.style.display = 'none';
                document.body.style.overflow = 'auto'
                slider.style.display = "flex";
                chevronButton.style.display = "block";
            }
        }

    })
}
export default menMobile;