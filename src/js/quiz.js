const form = document.getElementById('quiz-form')
const inputs = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.question-item')
const alert = document.getElementById('alert')

function checkAnswers() {
  let correctAnswers = 0
  inputs.forEach(e => {
    if (e.checked) {
      let parent = e.closest('.question-item')
      if (e.value === 'true') {
        parent.classList.add('correct')
        parent.classList.remove('incorrect')
        correctAnswers++
      } else {
        parent.classList.remove('correct')
        parent.classList.add('incorrect')
        correctAnswers--
      }
    }
  })

  if (correctAnswers === 3) {
    alert.classList.add('active')
    setTimeout(() => alert.classList.remove('active'), 1500)
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()

  questions.forEach(e => {
    e.classList.add('incorrect')
  })

  checkAnswers()
})
