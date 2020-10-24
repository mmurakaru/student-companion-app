import Navigation from './components/Navigation'
import { createElement, getDataJsAll } from './lib'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import CodebuddysPage from './pages/CodebuddysPage'
import TeamsPage from './pages/TeamsPage'
import EnergyPage from './pages/EnergyPage'
import JournalPage from './pages/JournalPage'
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

//x && y
//wenn x truthy dann mache y

//const x = y || z
//wenn es y gibt x = y, wenn nicht x = z

const cards = [
    {
        title: 'Yesterday',
        rating: 3,
        comprehension: 5,
        motto: 'That\'s life in the city',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunttenetur est delectus praesentium possimus quidem officia omnis provident repellat!'
    },
    {
        title: '12.07.2020',
        rating: 4,
        comprehension: 5,
        motto: 'One step at a time',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'
    }
]
console.log(cards)
// Für später:

// async function getCards() {
//     const data = await localStorage.getItem('cards')
//     const cardsData = JSON.parse(data)
//     return cardsData
// }

const header = Header({ defaultHeadline: 'Dashboard', defaultSubHeadline: ' ' })


const main = createElement({ type: 'main', className: 'main scrolling' })

createElement({ type: 'footer', className: 'nav center-flex' })

const routes = [{
    path: '/',
    component: DashboardPage({ target: main, text: 'Dashboard', data: members }),
    title: 'Dashboard',
    subTitle: ' ',
    srcActive: dashboardIconActive,
    srcInactive: dashboardIconInactive,
},
{
    path: '/code-buddys',
    component: CodebuddysPage({ target: main, text: 'Code-Buddys', data: members }),
    title: 'Code Buddys',
    subTitle: 'on Monday — 18.07.2020',
    srcActive: buddyIconActive,
    srcInactive: buddyIconInactive,
},
{
    path: '/teams',
    component: TeamsPage({ target: main, text: 'Teams', data: members }),
    title: 'Teams',
    subTitle: 'for Exercise 1',
    srcActive: teamIconActive,
    srcInactive: teamIconInactive
},
{
    path: '/energy',
    component: EnergyPage({ target: main, text: 'Energy', data: members }),
    title: 'Energy',
    subTitle: ' ',
    srcActive: energyIconActive,
    srcInactive: energyIconInactive
},
{
    path: '/journal',
    component: JournalPage({ target: main, text: 'Journal', cards }),
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