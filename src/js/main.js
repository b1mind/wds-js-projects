console.log('\x1b[1m\x1b[36m Starting WDS projects! \x1b[0m')

//< projects
import './piano'
import './quiz'
import './validation'
import './todo'
import './accordion'

//< lessons
// import './async'
// import './promises'

const nav = document.querySelector('.navMain')
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', () => {
  nav.classList.toggle('hidden')
})
