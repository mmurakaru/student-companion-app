import { display, displayNone, createElement } from '../lib'
import Button from '../components/Button'
import JournalCard from '../components/JournalCard'
import JournalForm from '../components/JournalForm'


export default function JournalPage({ text, target, cards }) {
    const attributes = [{ attributeName: 'data-name', attributeValue: 'journal' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'd-none mb-30 regular-12--light-blue jfc', attributes, target })
    
    const rateTodayButton = Button({ target: section, text: 'Rate today ★', className: 'mb-20 mt-24 orange w-200' })
    
    const journalForm = JournalForm({target, displayCards, cards})

    buildCards(cards)

    rateTodayButton.addEventListener('click', () => {
        displayNone(section)
        console.log(journalForm)
        journalForm.displayForm()
    })
    
    function buildCards(cards) {
        console.log("Torsten", cards)
        cards.length > 0 && cards.forEach(card => JournalCard( {card, target: section}))
    }

    function displayCards(cards) {
        buildCards(cards)
        display(section)
    }


}

/*
export function displayNone(selector) {
    selector.classList.add('d-none')
}

export function display(selector) {
    selector.classList.remove('d-none')
}*/
