import { createElement, createElementPlaceStart } from './js/lib'
import backgroundImg from './assets/background_shape_1.svg'
import './Header.css'

export default function Header({
    defaultHeadline,
    defaultSubHeadline,
    update,
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


    // füllen.
    function update(newHeadline, newSubheadline = '') {
        console.log('update!')
    }
}

/* <header class="header">
<h1 class="header__headline bold-16">Journal</h1>
<p class="header__subheadline regular-12"></p>
</header> */

/*
const headerContent = [{
    path: '/',
    headline: 'Dashboard',
},
{
    path: '/code-buddys',
    headline: 'Code Buddys',
    subheadline: 'on Monday — 18.07.2020',
},
{
    path: '/teams',
    headline: 'Teams',
    subheadline: 'for Exercise 1',
},
{
    path: '/energy',
    headline: 'Energy',
},
{
    path: '/journal',
    headline: 'Journal',
}
]*/