const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClosed = document.querySelector('.close');
const navBar = document.querySelector(".nav");
const navLeft = menu.getBoundingClientRect().left;


navOpen.addEventListener('click', () => {
    if(navLeft <= 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
})

navClosed.addEventListener('click', () => {
    if(navLeft < 0){
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
})

// Fix Nav
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
})

// Scroll To
const links = [...document.querySelectorAll('.scroll-link')];

links.map(link => {
    if(!link) return;
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);

        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0
        });

        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    });
});