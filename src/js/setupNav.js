import { displayNone, display, getDataJs, getDataJsAll } from './lib'

export default function setupNav() {
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
