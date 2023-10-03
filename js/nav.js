let humberger = document.querySelector(".humberger");
let links = document.querySelector(".links");

humberger.onclick = () => {
    humberger.classList.toggle("active");
    links.classList.toggle("active");
};
