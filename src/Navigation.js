import {createElement} from './js/lib'
import './Navigation.css'


export default function Navigation({ onNavigate, routes }) {
    console.log('Navigation')
    const el = createElement({ type: 'nav', className: 'nav__links', target: document.querySelector('footer') })
    console.log(el)

    routes.forEach((route, index) => {
      const btn = createElement({ type: 'button', target: el })
      const navIcon = createElement( {type: 'img', target: btn })
      index === 0 ? navIcon.setAttribute('src', route.srcActive) : navIcon.setAttribute('src', route.srcInactive)
      btn.addEventListener('click', () => {
          onNavigate(route.path)
          const imgs = document.querySelectorAll('nav button img')
          imgs.forEach((img, index) => img.setAttribute('src', routes[index].srcInactive))
          navIcon.setAttribute('src', route.srcActive)
          console.log()
        })
    

    })
  

    return {}
  }


  


  /*export default function setupNav() {
    const navButtons = getDataJsAll('navButton')
    const pages = getDataJsAll('page')
    const header = getDataJsAll('header')
  
    addNavLogic()
  
    function addNavLogic() {
      navButtons.forEach((navButton) => {
        navButton.addEventListener('click', (event) => {
          const clickedButton = event.currentTarget
          const targetName = clickedButton.dataset.name
  
          navButtons.forEach((navButtonItem) => {
            navButtonItem.firstElementChild.classList.add('d-none')
            navButtonItem.lastElementChild.classList.remove('d-none')
          })
  
          clickedButton.firstElementChild.classList.remove('d-none')
          clickedButton.lastElementChild.classList.add('d-none')
  
          pages.forEach((page) => {
            const pageName = page.dataset.name
            page.classList.toggle('d-none', targetName !== pageName)
          })
  
          header.forEach((header) => {
            const headerName = header.dataset.name
            header.classList.toggle('d-none', targetName !== headerName)
          })
        })
      })
    }
  }
  */