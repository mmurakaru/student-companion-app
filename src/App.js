import Navigation from './Navigation'
import { getDataJsAll } from './js/lib'
import Header from './Header'
import './styles/basic.css'

import dashboardIconActive from '/assets/icons/dashboardicon-active.svg'
import dashboardIconInactive from '/assets/icons/dashboardicon-inactive.svg'

import buddyIconActive from '/assets/icons/buddyicon-active.svg'
import buddyIconInactive from '/assets/icons/buddyicon-inactive.svg'

import teamIconActive from '/assets/icons/teamicon-active.svg'
import teamIconInactive from '/assets/icons/teamicon-inactive.svg'

import energyIconActive from '/assets/icons/energyicon-active.svg'
import energyIconInactive from '/assets/icons/energyicon-inactive.svg'

import journalIconActive from '/assets/icons/journalicon-active.svg'
import journalIconInactive from '/assets/icons/journalicon-inactive.svg'

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
    },
]

Header({ defaultHeadline: 'Dashboard', defaultSubHeadline: 'SUP Headline' })

const routes = [{
        //index[0]
        path: '/',
        //component: Page({ target: el, text: 'Dashboard', hidden: false }),
        title: 'Dashboard',
        srcActive: dashboardIconActive,
        srcInactive: dashboardIconInactive,
    },
    {
        //index[1]
        path: '/code-buddys',
        //component: Page({ target: el, text: 'Code Buddys', hidden: true }),
        title: 'Code Buddys',
        srcActive: buddyIconActive,
        srcInactive: buddyIconInactive,
    },
    {
        //index[2]
        path: '/teams',
        //component: Page({ target: el, text: 'Teams', hidden: true }),
        title: 'Teams',
        srcActive: teamIconActive,
        srcInactive: teamIconInactive,
    },
    {
        //index[3]
        path: '/energy',
        //component: Page({ target: el, text: 'Energy', hidden: true }),
        title: 'Energy',
        srcActive: energyIconActive,
        srcInactive: energyIconInactive,
    },
    {
        //index[4]
        path: '/journal',
        //component: Page({ target: el, text: 'journal', hidden: true }),
        title: 'Journal',
        srcActive: journalIconActive,
        srcInactive: journalIconInactive,
    },
]

Navigation({ targetSelector: 'footer', onNavigate: handleNavigate, routes })

function handleNavigate(path) {
    /*const newRoute = routes.find((route) => route.path === path)
                              header.update(newRoute.title)
                              routes.forEach((route) =>
                                route === newRoute ? route.component.show() : route.component.hide()
                              )*/

    const pages = getDataJsAll('page')
    pages.forEach((page) => {
        const pageName = page.dataset.name
        const targetName = path === '/' ? 'dashboard' : path.replace('/', '')
        page.classList.toggle('d-none', targetName !== pageName)
    })

    const headers = getDataJsAll('header')
    headers.forEach((header) => {
        const headerName = header.dataset.name
        const targetName = path === '/' ? 'dashboard' : path.replace('/', '')
        header.classList.toggle('d-none', targetName !== headerName)
    })

    //console.log('Grüße von der handleNavigate')
}