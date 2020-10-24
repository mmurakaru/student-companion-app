import { createElement } from '../lib'
import Chart from '../components/Chart'
import Button from '../components/Button'

export default function EnergyPage({ text, target, data }) {
    const attributes = [{ attributeName: 'data-name', attributeValue: 'energy' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'energy d-none mb-30 regular-12--light-blue', attributes, target })
    //target.appendChild(section)

    const headline1 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target: section })
    headline1.textContent = 'Energy Level throughout the day'

    Chart({ target: section })

    const headline2 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target: section })
    headline2.textContent = 'Rate your current energy'

    Button({ target: section, text: '100%', className: 'orange w-full my-5' })
    Button({ target: section, text: '75%', className: 'orange-75 w-full  my-5' })
    Button({ target: section, text: '50%', className: 'orange-50 w-full  my-5' })
    Button({ target: section, text: '25%', className: 'orange-25 w-full  my-5' })
}