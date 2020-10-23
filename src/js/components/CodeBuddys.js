import { createElement, createElementPlaceStart } from '../lib.js'
import '../../styles/components/CodeBuddys.css'
import '../../styles/styles.css'
import plus from '../../assets/icons/plus.svg'


export default function CodeBuddys(pair, target) {
    const sectionEl = createElement({ type: 'section', className: 'group mt-24', target })
    const plusEl = createElement({ type: 'img', className: 'group__plus' })
    const memberElTop = createElement({ className: 'group__member semibold-16--light-blue' })
    const memberElBottom = createElement({ className: 'group__member semibold-16--light-blue' })
    plusEl.src = plus
    sectionEl.appendChild(plusEl)
    sectionEl.appendChild(memberElBottom)
    sectionEl.appendChild(memberElTop)
    memberElTop.textContent = pair[0]
    memberElBottom.textContent = pair[1]
}


/*

const members = {
    codeBuddys: [
        ["Markus", "Jana"],
        ["Torsten", "Cindy"],
        ["Mario", "Mustermann"],
        ["Torben", "Klaus"]
    ],
    teams: [
        ["Markus", "Markus1", "Markus2", "Markus3", "Markus4"],
        ["Hans", "Hans1", "Hans2", "Hans3", "Hans4"],
    ]
}


*/