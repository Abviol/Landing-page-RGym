//? Change navbar appearance according to scrolled page height
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
   let scrolled = window.scrollY
   if (scrolled > 150) {
      navbar.classList.add('navbar-scrolled')
   } else {
      navbar.classList.remove('navbar-scrolled')
   }
})

//? Scroll reveal effects
//? Init scroll reveal and set common parametres for reveal animation
const sr = ScrollReveal({
   distance: '20px',
   duration: 2500,
   delay: 400,
});

//? Set animation for selected elements of the pages with custom delay and origin
sr.reveal(`.section__title`, {delay: 600})
sr.reveal(`.home__more, .section__description, .section__subtitle, .popular__decor`, {delay: 700})
sr.reveal(`.plans__title`, {origin: 'right'})
sr.reveal(`.plans__description, .training__img`, {origin: 'left', delay: 600})
sr.reveal(`.photos__item:nth-child(odd)`, { origin: 'bottom', delay: 600, distance: '2rem'})
sr.reveal(`.photos__item:nth-child(even)`, { origin: 'top', delay: 600, distance: '2rem' })
sr.reveal(`.welcome__col .row:first-child`, {delay: 800, origin: "top"})
sr.reveal(`.welcome__col .row:last-child`, {delay: 900, origin: "bottom"})
sr.reveal(`.contact__form`, {origin: "top"})