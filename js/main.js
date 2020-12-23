window.onload = () => {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
    .then((registration) => {
      registration.pushManager.getSubscription()
      .then((subscription) => {

      })
      .catch((error) => {
        console.log(error)
      })
    })
  }
}