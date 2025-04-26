const gridTemplate = () =>
  `
    <div class='grid-container'>
      <button class='pad btn0'></button>
      <button class='pad btn1'></button>
      <button class='pad btn2'></button>
      <button class='pad btn3'></button>
      <button class='pad btn4'></button>
      <button class='pad btn5'></button>
      <button class='pad btn6'></button>
      <button class='pad btn7'></button>
    </div>
  `

const styles = new CSSStyleSheet()
styles.replaceSync(`
  .pad {
    height: 100px;
    width: 100px;
    padding: 0;
    margin: 0;
  }
`)

export class GridElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, styles]
    shadow.innerHTML = gridTemplate()
  }

  connectedCallback() {
    console.log('Grid component added to page!')
  }
}
