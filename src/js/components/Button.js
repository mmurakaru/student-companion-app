import { createElement } from '../lib'
import '../../styles/components/Button.css'

export default function Button({ type = 'button', className = '', text, target }) {
    const buttonEl = createElement({ type, className: `button ${className}`, target })
    buttonEl.innerText = text
    return buttonEl
}
