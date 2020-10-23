import { createElement } from '../lib'
import '../../styles/components/Navigation.css'

export default function Navigation({ onNavigate, routes, targetSelector }) {
    const el = createElement({
        type: 'nav',
        className: 'nav__links',
        target: document.querySelector(targetSelector),
    })
    routes.forEach((route, index) => {
        const btn = createElement({ type: 'button', target: el })
        const navIcon = createElement({ type: 'img', target: btn })
            //index === 0 ? navIcon.setAttribute('src', route.srcActive) : navIcon.setAttribute('src', route.srcInactive)
        navIcon.src = index === 0 ? route.srcActive : route.srcInactive

        btn.addEventListener('click', () => {
            onNavigate(route.path, route.title, route.subTitle)
            const imgs = el.querySelectorAll('button img')
                //imgs.forEach((img, index) => img.setAttribute('src', routes[index].srcInactive))
            imgs.forEach((img, index) => (img.src = routes[index].srcInactive))
                //navIcon.setAttribute('src', route.srcActive)
            navIcon.src = route.srcActive
        })
    })
    return {}
}