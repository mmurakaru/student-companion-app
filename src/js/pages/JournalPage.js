import { displayNone, createElement } from '../lib'
import Button from '../components/Button'



export default function JournalPage({ text, target, data }) {
    const attributes = [{ attributeName: 'data-name', attributeValue: 'journal' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'energy d-none mb-30 regular-12--light-blue jfc', attributes, target })
    
    Button({ target: section, text: 'Rate today ★', className: 'orange my-5 w-200' })

}