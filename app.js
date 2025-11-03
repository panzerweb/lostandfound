// Import modules from js folder
import { toggleMenu } from "./js/nav.js";

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener("click", () => {
    toggleMenu(menuToggle, navLinks);
})

