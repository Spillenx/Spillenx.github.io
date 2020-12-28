// Controller for loading content from selected page

class mainController {
  constructor() {}

  init() {
    this.showMain()
  }

  showMain() {
    View.showMain()
  }

  selectedPage(page) {
    if(page == 'gallery'){
      View.showGallery()
    } else {
      View.showMain()
    }
  }
}