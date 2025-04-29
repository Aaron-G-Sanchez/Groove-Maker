/**
 * Custom event to trigger loop playback.
 */
export const PlayLoop = new CustomEvent('play-loop', {
  bubbles: true,
  composed: true,
  cancelable: true,
  detail: 'Event to trigger loop start.'
})

// TODO: Create [stop-loop] event to end loop playback.
