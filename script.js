// Change navbar style on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
// Add scroll animation for services
document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );
  
    services.forEach((service) => observer.observe(service));
  });
    