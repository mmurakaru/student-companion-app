import { displayNone, createElement } from '../lib'
import CodeBuddys from '../components/CodeBuddys'
import Teams from '../components/Teams'


export default function DashboardPage({ text, target, data }) {

    const section = createElement({ type: 'section', attributeName: 'page-name', attributeValue: 'dashboard' })
    target.appendChild(section)
    const headline1 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target: section })
    headline1.textContent = 'Your Code Buddy for Today:'

    // headline apply
    CodeBuddys(data.codeBuddys[0], section) // members müssen wir übergeben.
    const headline2 = createElement({ type: 'h2', className: 'semibold-14 mb-10 mt-24', target: section })
    headline2.textContent = 'Your current Team:'
    Teams(data.teams[0], section)




}


/*
[
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