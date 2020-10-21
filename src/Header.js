import { createElement, createElementPlaceStart } from './js/lib'
import backgroundImg from './assets/background_shape_1.svg'
import './Header.css'

export default function Header({
    defaultHeadline,
    defaultSubHeadline
}) {
    createElementPlaceStart({ type: 'header', className: 'header' })
    const el = document.querySelector('header')

    const imgWave = createElement({ type: 'img', target: el, className: 'header__img' })

    imgWave.src = backgroundImg

    const headline = createElement({
        type: 'h1',
        target: el,
        className: 'header__headline',
    })
    headline.textContent = defaultHeadline;

    const subheadline = createElement({
        type: 'span',
        target: el,
        className: 'header__subheadline regular-12',
    })
    subheadline.textContent = defaultSubHeadline;


    function updateHeader(title, subHeadline) {
        headline.textContent = title
        subheadline.textContent = subHeadline
    }

    return {updateHeader}
}