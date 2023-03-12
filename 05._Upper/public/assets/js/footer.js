console.log("Test");

const footer = document.getElementById("copyright-year");
const year = new Date().getFullYear();

footer.innerText = `© / ${year}`;
