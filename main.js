const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

const fixHeader = () => {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add("sticky_header");
  } else {
    header.classList.remove("sticky_header");
  }
};

window.addEventListener("scroll", fixHeader);
