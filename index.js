import { GridElement } from './components/GridElement.js'
import { TransportControls } from './components/TransportControls.js'

// UI ELEMENT DEFINITION
customElements.define('grid-element', GridElement)
customElements.define('transport-controls', TransportControls)

// TODO: Create a counter that loops through the step grid.
let intervalId
let sequenceLength = 8
let currentStep = 0

// TODO: Move to separate files.
const startLoop = () => {
  if (currentStep < sequenceLength) {
    currentStep++
  } else {
    currentStep = 1
  }

  console.log(currentStep)
}

const endLoop = () => {
  console.log('ENDING LOOP')
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
    currentStep = 0
  }
}

// Start the playback loop.
document.addEventListener('play-loop', () => {
  if (currentStep === 0) {
    currentStep = 1
  }

  if (!intervalId) {
    intervalId = setInterval(startLoop, 1000)
  }
  console.log(currentStep)
})

// End the playback loop.
document.addEventListener('end-loop', endLoop)
