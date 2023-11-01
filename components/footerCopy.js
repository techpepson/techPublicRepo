function footerCopy() {
    const footerClass = document.querySelector('.footer-copy');
    const newDate = new Date();
    const currentYear = newDate.getFullYear();
    footerClass.innerHTML = '&copy;' +  currentYear + " " + "All rights reserved."
}
export default footerCopy();