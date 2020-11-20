const promise = new Promise((resolve, reject) => {
  const sum = 1 + 2
  if (sum === 2) {
    resolve('Custom success')
  } else {
    reject('Custom Error')
  }
})

promise
  .then(msg => {
    console.log(msg)
  })
  .catch(msg => {
    console.error(msg)
  })

/* setTimeout(() => {
  console.log('here')
  setTimeout(() => {
    console.log('here 2')
    setTimeout(() => {
      console.log('here 3')
    }, 250)
  }, 250)
}, 250) */

/* setTimeoutPromise(250)
  .then(() => {
    console.log('here is a returned promise')
    return setTimeoutPromise(250)
  })
  .then(() => {
    console.log('promise 2')
  })
  .then(() => {
    console.log('promise 3')
  })

function setTimeoutPromise(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
} */

// Challenge create a promise version of addEventListener
const promiseBtn = document.getElementById('promise')

function addListener(ele, method) {
  return new Promise(resolve => {
    ele.addEventListener(method, resolve)
  })
}

addListener(promiseBtn, 'click').then(e => {
  setTimeout(() => {
    console.log('working event', e)
    e.target.innerHTML = 'Kept 1ms'
  }, 1000)
})

// .all needs to all pass to not result in catch
// .any will return any top to bottom
// .allSettled waits for all to finish and msg returns array>object and ignores catch

Promise.allSettled([Promise.resolve('1'), Promise.reject('error on 2'), Promise.resolve('3')])
  .then(msg => {
    console.log(msg)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(() => {
    console.log('finally always runs ')
  })

function setTimeoutAwait(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`)
    }, delay)
  })
}

async function doStuff() {
  try {
    const msg = await setTimeoutAwait(250)
    console.log(msg)
    console.log('await 1')
    const msg2 = await setTimeoutAwait(250)
    console.log(msg2)
    console.log('await 2')
  } catch (error) {
    console.log(error)
  }
}

doStuff()

function getValueWithDelay(value, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value, `You waited ${delay} milliseconds`)
    }, delay)
  })
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`error with ${value} value`)
    }, delay)
  })
}

async function doAsyncChallenge() {
  try {
    const value1 = await getValueWithDelay(420, 1000)
    console.log(value1)
    const value2 = await getValueWithDelay(9000, 1000)
    console.log(value2)

    const errorMsg = await getValueWithDelayError(69, 1000)
    console.log(errorMsg)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('async finally done')
  }
}

doAsyncChallenge()
