class mainView {
  constructor() {}

  showMain() {
    let html = ''
    html += '<p>Final assingment in PWA for JavaScript Development at EC Utbildning</p>'
    Helper.setHtml('main', html)
  }

  showGallery() {
    let html = ''
    html += "<h1>Bosses fina bilder!"
    html += "<p>"
    html += "<img src='images/beach.jpg'>"
    html += "<img src='images/shenzhen.jpg'>"
    Helper.setHtml('main', html)
  }
}