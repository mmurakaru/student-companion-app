import { displayNone, createElement } from '../lib'
import CodeBuddys from '../components/CodeBuddys'




export default function CodebuddysPage({ text, target, data }) {

    const attributes = [{ attributeName: 'data-name', attributeValue: 'code-buddys' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', attributes })
        //const section = createElement({ type: 'section', attributeName: 'page-name', attributeValue: 'dashboard' })
    target.appendChild(section)
    data.codeBuddys.forEach(codeBuddy => CodeBuddys(codeBuddy, section))
}
