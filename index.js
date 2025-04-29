import { GridElement } from './components/GridElement.js'
import { TransportControls } from './components/TransportControls.js'

// UI ELEMENT DEFINITION
customElements.define('grid-element', GridElement)
customElements.define('transport-controls', TransportControls)

// TODO: Create a counter that loops through the step grid.
document.addEventListener('play-loop', () => {
  console.log('PLAY LOOP EVENT EMITTED.')
})
