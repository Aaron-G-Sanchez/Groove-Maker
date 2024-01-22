let root = document.querySelector('.root')

// TIMER WIP

let start = 0
let timerId

// GRID
const stepCount = 16

// Grid main container
const controlsContainer = document.createElement('div')
controlsContainer.classList.add('controls-container')

root.appendChild(controlsContainer)

// Transport controlls (play/ stop)
const transportControls = document.createElement('div')
transportControls.classList.add('transport-controls')

controlsContainer.appendChild(transportControls)

// Play button
const playButton = document.createElement('div')
playButton.classList.add('play-btn')
playButton.classList.add('btn')
playButton.innerHTML = 'play'

// Stop button
const stopButton = document.createElement('div')
stopButton.classList.add('stop-btn')
stopButton.classList.add('btn')
stopButton.innerHTML = 'stop'

// Timer display
let timer = document.createElement('p')
timer.classList.add('timer-display')

timer.innerHTML = start

transportControls.appendChild(playButton)
transportControls.appendChild(stopButton)
transportControls.appendChild(timer)

// Click events to start and stop the timer
// Start timer
playButton.addEventListener('click', () => {
  if (!timerId) {
    timerId = setInterval(() => {
      // Replace start with a timer function
      start++
      // Reset the content of the timer <p> tag
      timer.innerHTML = start
    }, 1000)
  }
})

// Stop timer
stopButton.addEventListener('click', () => {
  clearInterval(timerId)
  timerId = null
})

// Grid controlls container
const gridContainter = document.createElement('div')
gridContainter.classList.add('grid-container')

controlsContainer.appendChild(gridContainter)

// Click handler callback function
const toggleBeat = (target) => {
  target.classList.toggle('active')
}

// Individual steps
for (let i = 1; i <= stepCount; i++) {
  let step = document.createElement('div')
  step.classList.add('step')
  step.classList.add(`count-${i}`)
  step.addEventListener('click', () => toggleBeat(step))
  gridContainter.appendChild(step)
}
