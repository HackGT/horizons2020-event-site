const clogStyle = `
    font-size: 2rem; 
    color: #ff198c; 
    font-weight: bold;
`;
const clogMsg = "👋 konnichiwa";

console.log(`%c ${clogMsg}`, clogStyle);

const scrollIndicator = document.getElementById("scroll-indicator");
const navBar = document.getElementById("nav");
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

document.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (winScroll > 0.5 * vh && winScroll < 6.35 * vh) {
        navBar.style.color = "var(--text-dark-bg)";
    } else {
        navBar.style.color = "var(--text-light-bg)";
    }
    const scrolled = (winScroll / height);
    scrollIndicator.value = scrolled;
}) 