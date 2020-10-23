import { displayNone } from './lib'
import { createElement } from './lib'
import dashboard from '/.dashboard'
import './Pages.js'


export default function Page({ text, target, hidden = false }) {



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

    const main = createElement({ type: 'main', className: 'main scrolling' })
    members.codeBuddys.forEach(pair => CodeBuddys(pair, main))





    const el = createElement({ type: 'section', className: 'Page', target })
    el.textContent = text

    hidden && hide()

    return { show, hide }

    function show() {
        el.classList.remove('hidden')
    }

    function hide() {
        el.classList.add('hidden')
    }
}