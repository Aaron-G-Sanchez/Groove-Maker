const gridTemplate = () =>
  `
    <div class='grid-container'>
      <button class='pad step-0'></button>
      <button class='pad step-1'></button>
      <button class='pad step-2'></button>
      <button class='pad step-3'></button>
      <button class='pad step-4'></button>
      <button class='pad step-5'></button>
      <button class='pad step-6'></button>
      <button class='pad step-7'></button>
    </div>
  `

const styles = new CSSStyleSheet()
// TODO: Add hover styles to the pads.
styles.replaceSync(`
  .pad {
    border-radius: 5px;
    height: 100px;
    margin: 0;
    padding: 0;
    transition: ease-in-out .1s;
    width: 100px;
  }

  .active {
    background-color: #6c757d;
  }
`)

export class GridElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.adoptedStyleSheets = [styles]
    shadow.innerHTML = gridTemplate()

    const btnGroup = shadow.querySelectorAll('button.pad')
    btnGroup.forEach((btn) => {
      btn.addEventListener('click', () => this.handleButtonClick(btn))
    })
  }

  handleButtonClick(target) {
    // TODO: Add active attribute instead of class.
    target.classList.toggle('active')
  }
}
