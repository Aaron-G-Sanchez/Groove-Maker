import { PlayLoop, EndLoop } from '../shared/events.js'

const transportControlsTemplate = () => {
  // TODO: Add [p] tag to hold the current count.
  return `
    <div class='transport-controls-container'>
      <button class='play'>Play</button>
      <button class='stop'>Stop</button>
    </div>
  `
}

// TODO: Create the counter transport that is triggered when
// the play button is clicked.
export class TransportControls extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = transportControlsTemplate()
  }

  connectedCallback() {
    const playBtn = this.shadowRoot.querySelector('button.play')
    playBtn.addEventListener('click', this.onPlayLoopBtnClicked)

    const stopBtn = this.shadowRoot.querySelector('button.stop')
    stopBtn.addEventListener('click', this.onStopLoopBtnClicked)
  }

  // Emits the [play-loop] event.
  onPlayLoopBtnClicked() {
    this.dispatchEvent(PlayLoop)
  }

  onStopLoopBtnClicked() {
    this.dispatchEvent(EndLoop)
  }
}
