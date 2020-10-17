import Navigation from './Navigation'
import {getDataJsAll} from './js/lib'
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


const routes = [
    {
      path: '/',
      //component: Page({ target: el, text: 'Dashboard', hidden: false }),
      title: 'Dashboard',
      srcActive: dashboardIconActive,
      srcInactive: dashboardIconInactive,
    },
    {
      path: '/code-buddys',
      //component: Page({ target: el, text: 'Code Buddys', hidden: true }),
      title: 'Code Buddys',
      srcActive: buddyIconActive,
      srcInactive: buddyIconInactive,
    },
    {
      path: '/teams',
      //component: Page({ target: el, text: 'Teams', hidden: true }),
      title: 'Teams',
      srcActive: teamIconActive,
      srcInactive: teamIconInactive,
    },
    {
      path: '/energy',
      //component: Page({ target: el, text: 'Energy', hidden: true }),
      title: 'Energy',
      srcActive: energyIconActive,
      srcInactive: energyIconInactive,
    },
    {
        path: '/journal',
        //component: Page({ target: el, text: 'journal', hidden: true }),
        title: 'Journal',
        srcActive: journalIconActive,
        srcInactive: journalIconInactive,
      },
  ]


  Navigation({ target: 'footer', onNavigate: handleNavigate, routes })

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


    console.log('Grüße von der handleNavigate')
  }
