const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');


menuIcon.addEventListener('click', () => {
menuIcon.classList.toggle('fa-x');
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


   