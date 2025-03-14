const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

const activePage = () =>{
    const header =document.querySelector('header');
    const barsBox =document.querySelector('.bars-box');

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

navLinks.forEach((link, idx)=>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() =>{
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

logoLink.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() =>{
            sections[0].classList.add('active');
        },1100);
    }
});




/*Function to open different company logo tabs to view certificates*/

function showCerts(company) {
    document.querySelectorAll('.cert-container').forEach(container => {
        container.classList.remove('show');
    });
    setTimeout(() => {
        document.getElementById(company).classList.add('show');
    }, 100);
}

function markClicked(event) {
    event.target.classList.add('clicked');
    localStorage.setItem(event.target.href, 'clicked');
}

window.onload = function () {
    document.querySelectorAll('.cert-box a').forEach(link => {
        if (localStorage.getItem(link.href) === 'clicked') {
            link.classList.add('clicked');
        }
        link.addEventListener('click', markClicked);
    });
}


/*Code for About Tabs*/

document.addEventListener("DOMContentLoaded", () => {
    const aboutBtns = document.querySelectorAll(".about-btn");
    const aboutDetails = document.querySelectorAll(".about-detail");

    aboutBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            aboutBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Remove 'active' class from all details
            aboutDetails.forEach(detail => detail.classList.remove("active"));

            // Add 'active' class to the corresponding detail
            aboutDetails[idx].classList.add("active");
        });
    });
});


// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Create the dark mode toggle button
    const body = document.body;
    const darkModeToggle = document.createElement('div');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.querySelector('header').appendChild(darkModeToggle);
    
    // Check for saved user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply initial theme
    if (isDarkMode) {
        body.classList.add('dark-theme');
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    // Toggle theme on click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('darkMode', isDark);
        
        // Change icon based on current mode
        darkModeToggle.innerHTML = isDark ? 
            '<i class="fa-solid fa-sun"></i>' : 
            '<i class="fa-solid fa-moon"></i>';
        
        // Re-apply barsBox effect
        const barsBox = document.querySelector('.bars-box');
        barsBox.classList.remove('active');
        setTimeout(() => {
            barsBox.classList.add('active');
        }, 1100);
    });
});