import { createElement, createElementPlaceStart } from './js/lib'
import './CodeBuddys.css'
import  plus from '/assets/icons/plus.svg'


export default function CodeBuddys(pair, main) {
    console.log(pair)
    const sectionEl = createElement({type: 'section', className: 'group mt-24', target: main})
    const plusEl = createElement({type: 'img', className: 'group__plus'})
    const memberElTop = createElement({className: 'group__member semibold-16--light-blue' })
    const memberElBottom = createElement({className: 'group__member semibold-16--light-blue' })
    plusEl.src = plus
    sectionEl.appendChild(plusEl)
    sectionEl.appendChild(memberElBottom)
    sectionEl.appendChild(memberElTop)
    memberElTop.textContent = pair[0]
    memberElBottom.textContent = pair[1]
}