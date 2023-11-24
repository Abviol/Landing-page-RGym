const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
   let scrolled = window.scrollY
   console.log(scrolled)
   if (scrolled > 150) {
      navbar.classList.add('navbar-scrolled')
   } else {
      navbar.classList.remove('navbar-scrolled')
   }
})

/* Scroll reveal effects */

const sr = ScrollReveal({
   distance: '20px',
   duration: 2500,
   delay: 400,
   // reset: true,
});

sr.reveal(`.section__title`, {delay: 600})
sr.reveal(`.home__more, .section__description, .section__subtitle, .popular__decor`, {delay: 700})

sr.reveal(`.plans__title`, {origin: 'right'})
sr.reveal(`.plans__description, .training__img`, {origin: 'left', delay: 600})

sr.reveal(`.photos__item:nth-child(odd)`, { origin: 'bottom', delay: 600, distance: '2rem'})
sr.reveal(`.photos__item:nth-child(even)`, { origin: 'top', delay: 600, distance: '2rem' })

sr.reveal(`.welcome__col .row:first-child`, {delay: 800, origin: "top"})
sr.reveal(`.welcome__col .row:last-child`, {delay: 900, origin: "bottom"})
