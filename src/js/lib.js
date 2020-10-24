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

export function createElement({
    type = 'div',
    target = document.body,
    className,
    attributes,
}) {
    const el = document.createElement(type)
    el.className = className
    attributes && attributes.forEach(attribute => {
        el.setAttribute(attribute.attributeName, attribute.attributeValue)
    })
    //const attributes = [{ attributeName: 'data-name', attributeValue: 'dashboard' }, { attributeName: 'data-js', attributeValue: 'page' }]
    //attributeName && el.setAttribute(attributeName, attributeValue)
    target.appendChild(el)
    return el
}

export function createElementPlaceStart({
    type = 'div',
    target = document.body,
    className,
}) {
    const el = document.createElement(type)
    el.className = className
    target.insertAdjacentElement('afterbegin', el)
    return el
}