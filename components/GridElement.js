// TODO: Resize the pad buttons.
// TODO: Add aria label for each step in the grid.
// TODO: Make button/step count dynamic.
const gridTemplate = () => {
  return `
    <div class='grid-container'>
      <button class='pad'></button>
      <button class='pad'></button>
      <button class='pad'></button>
      <button class='pad'></button>
      <button class='pad'></button>
      <button class='pad'></button>
      <button class='pad'></button>
      <button class='pad'></button>
    </div>
  `
}

const styles = new CSSStyleSheet()
// TODO: Add hover styles to the pads.
styles.replaceSync(`
  .grid-container {
    display: flex; 
    gap: 5px;
  }

  .pad {
    border-width: .5px;
    border-radius: 3px;
    height: 25px;
    margin: 0;
    padding: 0;
    transition: ease-in-out .1s;
    width: 18px;
  }

  .active {
    background-color: #6c757d;
  }
`)

export class GridElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, styles]
    shadow.innerHTML = gridTemplate()

    const btnGroup = shadow.querySelectorAll('button.pad')
    btnGroup.forEach((btn) => {
      btn.addEventListener('click', () => this._handleButtonClick(btn))
    })
  }

  // TODO: Rename to be more specific to pads.
  _handleButtonClick(target) {
    // TODO: Add active attribute instead of class.
    target.classList.toggle('active')
  }
}
