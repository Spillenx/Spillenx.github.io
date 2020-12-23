class mainView {
  constructor() {}

  showMain() {
    let html = ''
    html += '<p>Final assingment in PWA for JavaScript Development at EC Utbildning</p>'
    Helper.setHtml('main', html)
  }

  showGallery() {
    let html = ''
    html += '<div id="item">'
    html += "<p>"
    html += "<img src='images/beach.jpg'>"
    html += '</div>'
    html += '<br>'
    html += '<div id="item">'
    html += "<img src='images/shenzhen.jpg'>"
    html += '</div>'
    Helper.setHtml('main', html)
  }
}