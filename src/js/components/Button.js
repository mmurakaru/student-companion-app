import { createElement } from '../lib'
import '../../styles/components/button.css'

export default function Button({ className, text, target }) {
    const buttonEl = createElement({ type: 'button', className: `button ${className ? className : ''}`, target })
    buttonEl.innerText = text
    return buttonEl
}
