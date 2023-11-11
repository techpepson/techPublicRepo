//This is the men page effects made with js
function lazyLoading() {
  const imagesToDisplay = document.querySelectorAll(".images");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target)
            observer.unobserve(entry.target);
        }
    });
  });

  imagesToDisplay.forEach((images) => {
    observer.observe(images);
  });
}

export default lazyLoading;
