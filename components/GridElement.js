export class GridElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    // TODO: Replace with one row of grid.
    this.shadowRoot.innerHTML = 'Hello, World'
  }

  connectedCallback() {
    console.log('Grid component added to page!')
  }
}
