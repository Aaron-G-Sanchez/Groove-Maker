import {
  PlayLoop,
  EndLoop,
  createChangeSequenceLengthEvent
} from '../shared/events.js'

const transportControlsTemplate = () => {
  // TODO: Add [p] tag to hold the current count.
  return `
    <div class='transport-controls-container'>
      <button class='play'>Play</button>
      <button class='stop'>Stop</button>
      <select type='select' class='sequence-length-select'>
        <option value='4' selected>4</option>
        <option value='8'>8</option>
        <option value='16'>16</option>
      </select>
    </div>
  `
}

export class TransportControls extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = transportControlsTemplate()
  }

  connectedCallback() {
    const playBtn = this.shadowRoot.querySelector('button.play')
    playBtn.addEventListener('click', this._onPlayLoopBtnClicked)

    const stopBtn = this.shadowRoot.querySelector('button.stop')
    stopBtn.addEventListener('click', this._onStopLoopBtnClicked)

    const sequenceLengthSelect = this.shadowRoot.querySelector(
      'select.sequence-length-select'
    )
    sequenceLengthSelect.addEventListener(
      'change',
      this._onChangeSequenceLength
    )
  }

  _onPlayLoopBtnClicked() {
    this.dispatchEvent(PlayLoop)
  }

  _onStopLoopBtnClicked() {
    this.dispatchEvent(EndLoop)
  }

  _onChangeSequenceLength(e) {
    const changeSequenceLengthEvent = createChangeSequenceLengthEvent(
      e.target.value
    )

    this.dispatchEvent(changeSequenceLengthEvent)
  }
}
