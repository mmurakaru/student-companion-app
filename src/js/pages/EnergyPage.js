import { createElement } from '../lib'
import Chart from '../components/Chart'
import Button from '../components/Button'

export default function EnergyPage({ text, target, data }) {
    const attributes = [{ attributeName: 'data-name', attributeValue: 'energy' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'energy mb-30 regular-12--light-blue', attributes })
    target.appendChild(section)

    const headline1 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target: section })
    headline1.textContent = 'Energy Level throughout the day'

    Chart({ target: section })

    const headline2 = createElement({ type: 'h2', className: 'semibold-14 mb-10', target: section })
    headline2.textContent = 'Rate your current energy'

    Button({ target: section, text: '100%', className: 'orange my-5' })
    Button({ target: section, text: '75%', className: 'orange-75 my-5' })
    Button({ target: section, text: '50%', className: 'orange-50 my-5' })
    Button({ target: section, text: '25%', className: 'orange-25 my-5' })

}



{/* <main data-js="page" data-name="energy" class="main scrolling d-none">
<section class="energy mb-30 regular-12--light-blue">
    <h2 class="semibold-14 mb-10">Energy Level throughout the day</h2>
   
</section>

<h2 class="semibold-14 mb-10">Rate your current energy level:</h2>
<section class="energy__buttons">
    <button class="energy__button">100%</button>
    <button class="energy__button energy__button2">75%</button>
    <button class="energy__button energy__button3">50%</button>
    <button class="energy__button energy__button4">25%</button>
</section>
</main> */}