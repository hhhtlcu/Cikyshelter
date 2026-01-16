/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 50) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 50) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-data, .home-img,
            .about-data, .about-statistik,
            .service-data, .service-content, 
            .testimony-data, .carousel-wrapper, .carousel-info,
            .footer-content, .footer-copy`, {
    interval: 200
})

let currentSlide = 0;
        const cards = document.querySelectorAll('.testimony-card');
        const totalSlides = cards.length;
        const dotsContainer = document.getElementById('dotsContainer');
        const currentSlideElement = document.getElementById('currentSlide');
        const totalSlidesElement = document.getElementById('totalSlides');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let isAnimating = false;

function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function showSlide(index, direction = 'next') {
    if (isAnimating) return;
    isAnimating = true;

    const oldSlide = currentSlide;
            
    if (direction === 'next') {
        cards[index].classList.add('slide-in-right');
    } else {
        cards[index].classList.add('slide-in-left');
     }
            
    cards[index].offsetHeight;
            
    setTimeout(() => {
    if (direction === 'next') {
            cards[oldSlide].classList.remove('active');
            cards[oldSlide].classList.add('slide-out-left');
    } else {
        cards[oldSlide].classList.remove('active');
        cards[oldSlide].classList.add('slide-out-right');
    }
                
    
    cards[index].classList.remove('slide-in-left', 'slide-in-right');
    cards[index].classList.add('active');
                
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
                
    currentSlideElement.textContent = index + 1;
}, 100);
            
setTimeout(() => {
    cards.forEach(card => {
        card.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
    });
    isAnimating = false;
    }, 300);
}

function nextSlide() {
    const newSlide = (currentSlide + 1) % totalSlides;
    showSlide(newSlide, 'next');
    currentSlide = newSlide;
}

function prevSlide() {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(newSlide, 'prev');
    currentSlide = newSlide;
}

function goToSlide(index) {
    if (index === currentSlide || isAnimating) return;
    const direction = index > currentSlide ? 'next' : 'prev';
    showSlide(index, direction);
    currentSlide = index;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
if (e.key === 'ArrowLeft') prevSlide();
if (e.key === 'ArrowRight') nextSlide();
});

totalSlidesElement.textContent = totalSlides;
createDots();