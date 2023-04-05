const nav = document.querySelector('.nav')

const handleNav = () => {
    nav.classList.toggle('shrink', window.scrollY > 300)
}
window.addEventListener('scroll', handleNav)