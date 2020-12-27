//register serviceworker when window finished loading

window.onload = () => {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
  }
}