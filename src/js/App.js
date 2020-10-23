import Navigation from './components/Navigation'
import { createElement, getDataJsAll } from './lib'
import Header from './components/Header'
import CodeBuddys from './components/CodeBuddys'
import Teams from './components/Teams'
import '../styles/basic.css'

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


const members = {
    codeBuddys: [
        ["Markus", "Jana"],
        ["Torsten", "Cindy"],
        ["Mario", "Mustermann"],
        ["Torben", "Klaus"]
    ],
    teams: [
        ["Markus", "Markus1", "Markus2", "Markus3", "Markus4"],
        ["Hans", "Hans1", "Hans2", "Hans3", "Hans4"],
    ]
}



const header = Header({ defaultHeadline: 'Dashboard', defaultSubHeadline: '1234' })

const main = createElement({ type: 'main', className: 'main scrolling' })
    //members.codeBuddys.forEach(pair => CodeBuddys(pair, main))
members.teams.forEach(team => Teams(team, main))

createElement({ type: 'footer', className: 'nav center-flex' })

const routes = [{
        //index[0]
        path: '/',
        //component: DashboardPage({ target: el, text: 'Dashboard', hidden: false }),
        /** variante 1 */
        title: 'Dashboard',
        subTitle: ' ',
        srcActive: dashboardIconActive,
        srcInactive: dashboardIconInactive,
    },
    {
        //index[1]
        path: '/code-buddys',
        //component: Page({ target: el, text: 'Code Buddys', hidden: true }),
        title: 'Code Buddys',
        subTitle: 'on Monday — 18.07.2020',
        srcActive: buddyIconActive,
        srcInactive: buddyIconInactive,
    },
    {
        //index[2]
        path: '/teams',
        //component: Page({ target: el, text: 'Teams', hidden: true }),
        title: 'Teams',
        subTitle: 'for Exercise 1',
        srcActive: teamIconActive,
        srcInactive: teamIconInactive
    },
    {
        //index[3]
        path: '/energy',
        //component: Page({ target: el, text: 'Energy', hidden: true }),
        title: 'Energy',
        subTitle: ' ',
        srcActive: energyIconActive,
        srcInactive: energyIconInactive
    },
    {
        //index[4]
        path: '/journal',
        //component: Page({ target: el, text: 'journal', hidden: true }),
        title: 'Journal',
        subTitle: ' ',
        srcActive: journalIconActive,
        srcInactive: journalIconInactive
    },
]


Navigation({ targetSelector: 'footer', onNavigate: handleNavigate, routes })



function handleNavigate(path, title, subTitle) {
    const pages = getDataJsAll('page')
    pages.forEach((page) => {
        const pageName = page.dataset.name
        const targetName = path === '/' ? 'dashboard' : path.replace('/', '')
        page.classList.toggle('d-none', targetName !== pageName)
    })
    header.updateHeader(title, subTitle)
}