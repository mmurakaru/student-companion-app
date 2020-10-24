import { displayNone, createElement } from '../lib'
import Teams from '../components/Teams'



export default function TeamsPage({ text, target, data }) {

    const attributes = [{ attributeName: 'data-name', attributeValue: 'teams' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'd-none', attributes, target })
    //target.appendChild(section)
    const headline1 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target: section })
    headline1.textContent = 'Team 1'
    Teams(data.teams[0], section)

    const headline2 = createElement({ type: 'h2', className: 'semibold-14 mb-10 mt-24', target: section })
    headline2.textContent = 'Team 2'
    Teams(data.teams[1], section)

}