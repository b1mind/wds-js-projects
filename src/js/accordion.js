const accordion = document.querySelector('#accordion')
accordion.addEventListener('click', e => {
  const btn = e.target.closest('button')
  if (!btn) return

  const parent = btn.closest('.card')
  const cardBody = parent.querySelector('.card-body')
  cardBody.classList.toggle('show')

  btn.innerText = cardBody.classList.contains('show') ? 'Collapse' : 'Expand'
})

// kyle checked if button was clicked with matches
// if (e.target.matches('.expand-button')) return
// then used e.target for rest
// used a nice little turnery that checks the innerText
// e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"

// Original code changed to turnery
/* if (cardBody.classList.contains('show')) {
    btn.innerText = 'Collapse'
  } else {
    btn.innerText = 'Expand'
  } */
