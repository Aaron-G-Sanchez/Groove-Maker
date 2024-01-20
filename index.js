let root = document.querySelector('.root')

// GRID
const stepCount = 16

const controlsContainer = document.createElement('div')
controlsContainer.classList.add('controls-container')

root.appendChild(controlsContainer)

const gridContainter = document.createElement('div')
gridContainter.classList.add('grid-container')

controlsContainer.appendChild(gridContainter)

// Click handler callback function
const toggleBeat = (target) => {
  target.classList.toggle('active')
}

for (let i = 1; i <= stepCount; i++) {
  let step = document.createElement('div')
  step.classList.add('step')
  step.classList.add(`count-${i}`)
  step.addEventListener('click', () => toggleBeat(step))
  gridContainter.appendChild(step)
}
