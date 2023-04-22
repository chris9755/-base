const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  }
})



const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')


const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()