window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open');

        const icon = faqs.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus';
        } else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})



// show/hide menu 
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})