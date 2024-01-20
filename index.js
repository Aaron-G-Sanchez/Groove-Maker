// GRID
let root = document.querySelector('.root')

const stepCount = 16

const gridContainer = document.createElement('div')
gridContainer.classList.add('grid-container')

root.appendChild(gridContainer)

const toggleBeat = (target) => {
  target.classList.toggle('active')
}

for (let i = 1; i <= stepCount; i++) {
  let step = document.createElement('div')
  step.classList.add('step')
  step.classList.add(`count-${i}`)
  step.addEventListener('click', () => toggleBeat(step))
  gridContainer.appendChild(step)
}
