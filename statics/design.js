/**
 * ~~~~ Light Top Bar (preview) ~~~~
 * Shows a "High Contrast UI" top bar on pages
 * with low contrast to current top bar.
 * 
 * Select objects from DOM
 * Waits for document to be in view, then makes top
 * bar higher contrast.
 * 
 * .brightnav : All containers with white or close to 
 * bright background, bright navigation UI.
 */

// Light Section Navbar
const brightSection = document.querySelectorAll(".brightnav"); // Select the brighter container sections
const navBar = document.querySelector("nav"); // Seclect the navbar

const headeroptions = {
  root: null,
  threshold: 0,
  rootMargin: "-60px"
};
const navSpecialObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => toggleUI(entry.isIntersecting)); // run toggle when intersecting changes.
  },
  headeroptions
);

const toggleUI = (isHeroSection) => {
  // navBar.classList.toggle("heroSpecial");
  if (isHeroSection) {
    navBar.classList.add("light");
  } else {
    navBar.classList.remove("light");
  }
};

brightSection.forEach((section) => {
  navSpecialObs.observe(section);
});