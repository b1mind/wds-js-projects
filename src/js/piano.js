const audioContext = new AudioContext()
const useKeys = document.getElementById('useKeys')
const closeRotate = document.querySelector('.close')

const NOTE_DETAILS = [
  { note: 'C', key: 'S', frequency: 261.626, active: false },
  { note: 'Db', key: 'E', frequency: 277.183, active: false },
  { note: 'D', key: 'D', frequency: 293.665, active: false },
  { note: 'Eb', key: 'R', frequency: 311.127, active: false },
  { note: 'E', key: 'F', frequency: 329.628, active: false },
  { note: 'F', key: 'H', frequency: 349.228, active: false },
  { note: 'Gb', key: 'U', frequency: 369.994, active: false },
  { note: 'G', key: 'J', frequency: 369.994, active: false },
  { note: 'Ab', key: 'I', frequency: 391.995, active: false },
  { note: 'A', key: 'K', frequency: 440, active: false },
  { note: 'Bb', key: 'O', frequency: 466.164, active: false },
  { note: 'B', key: 'L', frequency: 493.883, active: false },
]

closeRotate.addEventListener('click', function () {
  let modal = this.closest('.rotate')
  modal.classList.add('hidden')
})

document.addEventListener('keydown', e => {
  if (!useKeys.checked) return
  if (e.repeat) return
  const keyboardKey = e.code
  const noteDetail = getNoteDetail(keyboardKey)

  if (noteDetail == null) return
  noteDetail.active = true
  playNotes()
})

document.addEventListener('keyup', e => {
  const keyboardKey = e.code
  const noteDetail = getNoteDetail(keyboardKey)
  if (noteDetail == null) return
  noteDetail.active = false
  playNotes()
})

function getNoteDetail(keyboardKey) {
  return NOTE_DETAILS.find(n => `Key${n.key}` === keyboardKey)
}

function playNotes() {
  NOTE_DETAILS.forEach(n => {
    const keyEle = document.querySelector(`[data-note="${n.note}"]`)
    keyEle.classList.toggle('active', n.active)

    if (n.oscillator != null) {
      n.oscillator.stop()
      n.oscillator.disconnect()
    }
  })

  const activeNotes = NOTE_DETAILS.filter(n => n.active)
  const gain = 1 / activeNotes.length
  activeNotes.forEach(n => {
    startNote(n, gain)
  })
}

function startNote(noteDetail, gain) {
  const gainNode = audioContext.createGain()
  const oscillator = audioContext.createOscillator()

  gainNode.gain.value = gain
  oscillator.frequency.value = noteDetail.frequency
  oscillator.type = 'sine'
  oscillator.connect(audioContext.destination)
  oscillator.start()

  noteDetail.oscillator = oscillator
}
