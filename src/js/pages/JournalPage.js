import { displayNone, createElement } from '../lib'
import Button from '../components/Button'
import JournalCard from '../components/JournalCard'



export default function JournalPage({ text, target, cards }) {
    console.log('cards', cards)
    const attributes = [{ attributeName: 'data-name', attributeValue: 'journal' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'energy d-none mb-30 regular-12--light-blue jfc', attributes, target })
    
    Button({ target: section, text: 'Rate today ★', className: 'mb-20 mt-24 orange w-200' })
    cards.forEach(card => JournalCard( {card, target: section}))

}