import { displayNone } from './js/lib'
import {createElement} from './js/lib'
import './Pages.js'


export default function Page({ text, target, hidden = false }) {
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
  