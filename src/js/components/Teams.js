import { createElement, createElementPlaceStart } from '../lib'
import '../../styles/components/Teams.css'


export default function Teams(team, target) {
    // team.forEach(member => {
    // creatememberEl -> const memberEl = createElement({ className: 'group__member semibold-16--light-blue' })
    // fill el mit text -> memberElTop.textContent = pair[0]
    // hauen wir es in section -> sectionEl.appendChild(memberElBottom)

    //}
    const team1 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target })
    const sectionEl = createElement({ type: 'section', className: 'group mt-24', target })

    team.forEach(member => {
        const memberEl = createElement({ className: 'group__member semibold-16--light-blue' })
        memberEl.textContent = member
        sectionEl.appendChild(memberEl)
    })


}