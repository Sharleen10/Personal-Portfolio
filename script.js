const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');

// Mobile menu toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

// Active page management
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                let sectionIndex;
                if (link.textContent === 'Home') sectionIndex = 0;
                else if (link.textContent === 'About') sectionIndex = 1;
                else if (link.textContent === 'Certifications') sectionIndex = 2;
                else if (link.textContent === 'Projects') sectionIndex = 3;
                else if (link.textContent === 'Contact') sectionIndex = 4;
                
                if (sections[sectionIndex]) {
                    sections[sectionIndex].classList.add('active');
                }
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

// Certificate tabs functionality
function showCerts(company) {
    document.querySelectorAll('.cert-container').forEach(container => {
        container.classList.remove('show');
    });
    setTimeout(() => {
        document.getElementById(company).classList.add('show');
    }, 100);
}

// Temporary click state for buttons
document.querySelectorAll('.project-link, .cert-box a').forEach(link => {
    link.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 1000);
    });
});

// About tabs functionality
document.addEventListener("DOMContentLoaded", () => {
    const aboutBtns = document.querySelectorAll(".about-btn");
    const aboutDetails = document.querySelectorAll(".about-detail");

    aboutBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            aboutBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            aboutDetails.forEach(detail => detail.classList.remove("active"));
            aboutDetails[idx].classList.add("active");
        });
    });
});

// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkModeToggle = document.createElement('div');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.querySelector('header').appendChild(darkModeToggle);
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        body.classList.add('dark-theme');
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('darkMode', isDark);
        
        darkModeToggle.innerHTML = isDark ? 
            '<i class="fa-solid fa-sun"></i>' : 
            '<i class="fa-solid fa-moon"></i>';
        
        const barsBox = document.querySelector('.bars-box');
        barsBox.classList.remove('active');
        setTimeout(() => {
            barsBox.classList.add('active');
        }, 1100);
    });
});

// Reset form on page load
window.addEventListener('load', function() {
    const form = document.querySelector('form');
    if (form) form.reset();
});