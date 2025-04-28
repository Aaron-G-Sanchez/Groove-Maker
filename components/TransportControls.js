const transportControlsTemplate = () => {
  return `
    <div class='transport-controls-container'>
      <button>Play</button>
      <button>Pause</button>
    </div>
  `
}

export class TransportControls extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = transportControlsTemplate()
  }
}
