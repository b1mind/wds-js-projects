console.log('Practicing async')

const URL = 'https://jsonplaceholder.typicode.com/users'
const COMMENTS = 'https://jsonplaceholder.typicode.com/comments?postId=1'

// fun with fetch
fetch(URL)
  .then(response => {
    console.log(response)

    return response.json()
  })
  .then(data => {
    // : challenge console log each of the users names

    const usersArray = data.map(user => user.name)
    console.log(usersArray)

    // data.forEach(user => console.log(user.username))
    // console.log(data)
  })

async function fetchStuff() {
  try {
    const response = await fetch(URL)
    console.log(`response is ok?`, response.ok)

    const dataAsync = await response.json()

    console.log(
      '\x1b[1m\x1b[33m Async fetch \x1b[0m',
      dataAsync.map(user => user.username),
    )
  } catch (e) {
    console.error(e)
  }
}

fetchStuff()

async function fetchComment() {
  const res = await fetch(COMMENTS)
  const comments = await res.json()
  const bodyArray = comments.map(c => c.body)

  console.dir(comments)
  comments.forEach(c => {
    console.log(c.body)
  })

  console.dir(bodyArray)

  bodyArray.forEach(c => console.log(c))

  // console.log(comments[0].body)
}

setTimeout(fetchComment, 2000)
