export function getDataJs(name) {
  return document.querySelector(`[data-js="${name}"]`)
}

export function getDataJsAll(name) {
  return document.querySelectorAll(`[data-js="${name}"]`)
}

export function displayNone(selector) {
  selector.classList.add('d-none')
}

export function display(selector) {
  selector.classList.remove('d-none')
}
