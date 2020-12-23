var Helper = {}

Helper.show = () => {
  document.getElementById(tag).style.display="block"
}

Helper.setHtml = (tag, html) => {
  document.getElementById(tag).innerHTML = html
}

Helper.onClick = (tag, action) => {
  document.getElementById(tag).addEventListener('click', action)
}

Helper.clearInput = () => {
  document.getElementById(tag).value=''
}