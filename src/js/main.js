const nav = document.querySelector('.navMain')
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', e => {
  nav.classList.toggle('hidden')
})

console.log('Hi. starting WDS projects')

import './piano.js'
import './quiz.js'
import './validation.js'
