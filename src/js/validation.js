// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const terms = document.getElementById('terms')
const errorsList = document.querySelector('.errors-list')

// TODO: Define this function
// Use a while loop to clear error list from dom

function clearErrors() {
  // let errorCount = errorsList.childElementCount
  // while (errorCount > 0) {

  while (errorsList.firstChild) {
    console.dir(errorsList)
    errorsList.removeChild(errorsList.firstChild)
    // errorCount--
  }

  // you can cheat by clearing innerHTML if you get stuck
  // errorsList.innerHTML = ''
  errorsList.closest('.errors').classList.remove('show')
}

// TODO: Define this function

function showErrors(msgs) {
  // Add each error to the error-list element

  msgs.forEach(msg => {
    // Make sure to use an li as the element for each error
    let li = document.createElement('li')
    li.innerHTML = msg
    errorsList.appendChild(li)
    console.log(msg)
  })

  // Also, make sure you add the show class to the errors container
  errorsList.closest('.errors').classList.add('show')
}

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener('submit', e => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  let errorMsgs = []
  clearErrors()

  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long

  if (username.value.length <= 5) {
    let msg = 'Username must be 6 characters long'
    errorMsgs = [msg, ...errorMsgs]
  }

  //      2. Ensure the password is at least 10 characters long
  if (password.value.length <= 9) {
    let msg = 'Password must be 10 characters long'
    errorMsgs = [msg, ...errorMsgs]
  }

  //      3. Ensure the password and confirmation password match
  if (password.value !== passwordConfirmation.value) {
    let msg = 'Passwords must match'
    errorMsgs = [msg, ...errorMsgs]
  }

  //      4. Ensure the terms checkbox is checked
  if (!terms.checked) {
    let msg = 'Must agree to terms'
    errorMsgs = [msg, ...errorMsgs]
  }

  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMsgs.length > 0) {
    showErrors(errorMsgs)
    e.preventDefault()
  }
})
