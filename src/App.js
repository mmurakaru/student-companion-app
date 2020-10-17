import Navigation from './Navigation'
import {displayNone, createElement} from './js/lib'

import './styles/basic.css'



const routes = [
    {
      path: '/',
      //component: Page({ target: el, text: 'Dashboard', hidden: false }),
      title: 'Dashboard',
      srcActive: 'assets/icons/dashboardicon-active.svg',
      srcInactive:'assets/icons/dashboardicon-inactive.svg',
    },
    {
      path: '/code-buddys',
      //component: Page({ target: el, text: 'Code Buddys', hidden: true }),
      title: 'Code Buddys',
      srcActive: 'bodyicon-active.svg',
      srcInactive:'bodyicon-inactive.svg',
    },
    {
      path: '/teams',
      //component: Page({ target: el, text: 'Teams', hidden: true }),
      title: 'Teams',
      srcActive: './assets/icons/teamicon-active.svg',
      srcInactive:'./assets/icons/teamicon-inactive.svg',
    },
    {
      path: '/energy',
      //component: Page({ target: el, text: 'Energy', hidden: true }),
      title: 'Energy',
      srcActive: './assets/icons/energyicon-active.svg',
      srcInactive:'./assets/icons/energyicon-inactive.svg',
    },
    {
        path: '/journal',
        //component: Page({ target: el, text: 'journal', hidden: true }),
        title: 'Journal',
        srcActive: './assets/icons/journalicon-active.svg',
        srcInactive:'./assets/icons/journalicon-inactive.svg',
      },
  ]


  Navigation({ target: 'footer', onNavigate: handleNavigate, routes })

  function handleNavigate(path) {
    /*const newRoute = routes.find((route) => route.path === path)
    header.update(newRoute.title)
    routes.forEach((route) =>
      route === newRoute ? route.component.show() : route.component.hide()
    )*/
  }
