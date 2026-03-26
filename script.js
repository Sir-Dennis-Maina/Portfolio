// MENU
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

/* =========================
   ✍️ TYPING LOOP EFFECT
========================= */

const text = "Hi, I'm Dennis Maina";
let i = 0;
let isDeleting = false;

function typeLoop() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (!isDeleting) {
        el.innerHTML = text.substring(0, i + 1);
        i++;

        if (i === text.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1500); // pause before deleting
            return;
        }
    } else {
        el.innerHTML = text.substring(0, i - 1);
        i--;

        if (i === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeLoop, isDeleting ? 50 : 100);
}

window.addEventListener("load", () => {
    setTimeout(typeLoop, 500);
});

/* =========================
   🌊 SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll("section");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < trigger) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);


// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});