//This is the men page effects made with js
import "../styles/menStyles.css";
//This is the function component for the lazy loading images.
function lazyLoading() {
  //Calling the images and caption classes.
  const imagesToDisplay = document.querySelectorAll(".images");
  const lazyCaption = document.querySelectorAll(".caption");
  //Definition of intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("lazyLoad");
        setTimeout(() => {
          entry.target.classList.add("lazyLoad");
        }, 0);
          observer.unobserve(entry.target);
          console.log(entry.target)
      }
    });
  });
  //Point of observation of the elements
  imagesToDisplay.forEach((images) => {
    observer.observe(images);
  });
  lazyCaption.forEach((caption) => {
    observer.observe(caption);
  });
}

export default lazyLoading;
