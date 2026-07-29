// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

// Navbar background on scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#000";

        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(13,13,13,0.90)";

        navbar.style.boxShadow = "none";

    }

});



// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ==========================================
// FADE-IN ANIMATION
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});



// ==========================================
// CONTACT BUTTON
// ==========================================

const contactBtn = document.querySelector('a[href="#contact"]');

if (contactBtn) {

    contactBtn.addEventListener("click", function () {

        console.log("Navigating to Contact Section");

    });

}



// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {

    console.log("Portfolio Loaded Successfully");

});