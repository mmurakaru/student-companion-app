import { createElement, createElementPlaceStart } from '../lib'
import '../../styles/components/Teams.css'

export default function Teams(team, target) {
    const sectionEl = createElement({ type: 'section', className: 'group mt-24', target })

    team.forEach(member => {
        const memberEl = createElement({ className: 'group__member semibold-16--light-blue' })
        memberEl.textContent = member
        sectionEl.appendChild(memberEl)
    })

}