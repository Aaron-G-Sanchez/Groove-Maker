import { GridElement } from './components/GridElement.js'
import { TransportControls } from './components/TransportControls.js'

// UI ELEMENT DEFINITION
customElements.define('grid-element', GridElement)
customElements.define('transport-controls', TransportControls)

const root = document.querySelector('main.root')
// TODO: Figure out how to pass step count into grid definition.
const kickGrid = document.createElement('grid-element')
root.appendChild(kickGrid)

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

// TODO: Move to separate files.
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

// EVENT REGISTRATION
// End the playback loop.
document.addEventListener('end-loop', endLoop)

// Handle length in beat change.
document.addEventListener('change-sequence-length', (e) => {
  console.log(`update beat grid to ${e.detail.value} bars`)
})
