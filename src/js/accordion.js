console.log('lets be challenged to make a accordion')

// make a e.delegation for buttons
const accordion = document.querySelector('#accordion')
accordion.addEventListener('click', e => {
  const btn = e.target.closest('button')
  if (!btn) return

  const parent = btn.closest('.card')
  const cardBody = parent.querySelector('.card-body')
  cardBody.classList.toggle('show')

  // check if show class if not collapse
  if (cardBody.classList.contains('show')) {
    btn.innerText = 'Collapse'
  } else {
    btn.innerText = 'Expand'
  }
})
