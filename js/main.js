//register serviceworker when window finished

window.onload  = () => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('./serviceWorker.js')
  }
}