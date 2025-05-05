/**
 * Event to trigger loop playback.
 */
export const PlayLoop = new CustomEvent('play-loop', {
  bubbles: true,
  composed: true,
  cancelable: true
})

/**
 * Event to end loop playback.
 */
export const EndLoop = new CustomEvent('end-loop', {
  bubbles: true,
  composed: true,
  cancelable: true
})

/**
 * Create a custom event to handle a change in beat length.
 */
export const createChangeBeatLengthEvent = (value) => {
  return new CustomEvent('change-beat-length', {
    bubbles: true,
    composed: true,
    cancelable: true,
    detail: { value }
  })
}
