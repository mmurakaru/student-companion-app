import { display, displayNone, createElement } from '../lib'
import Button from './Button'
import '../../styles/components/JournalCreate.css'
import starOutline from '../../assets/star-outline.svg'
import starActive from '../../assets/star-active.svg'
import rectangleOutline from '../../assets/rectangle-outline.svg'
import rectangleActive from '../../assets/rectangle-active.svg'

export default function JournalForm({target, displayCards}) {
    const cards = getCards() || []
    const attributes = [{ attributeName: 'data-name', attributeValue: 'journalForm' }, { attributeName: 'data-js', attributeValue: 'page' }]
    const section = createElement({ type: 'section', className: 'd-none scrolling w-full', attributes, target })
    const form = createElement({type: 'form', target: section})

    const headline = createElement({ type: 'h2', className: 'semibold-14--uppercase mb-20', target: form })
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear()

    today = dd + '.' + mm + '.' + yyyy
    headline.textContent = `Today, ${today}`


    const ratingHeadline = createElement({ type: 'h2', className: 'semibold-14 mb-20 w-full', target: form })
    ratingHeadline.textContent = 'Rating:'




    const ratingWrapper = createElement({type: 'fieldset', className: 'jfsa', target: form})
        // click event: get value and itererate through star. give active or inactive considering value


    Array(5).fill().forEach((_, index) => {
    const ratingLabelEl = createElement({type: 'label', target: ratingWrapper})
    const ratingInputEl = createElement({type: 'input', target: ratingLabelEl})
    ratingInputEl.setAttribute("type", "radio")
    ratingInputEl.setAttribute("name", "rating") 
    ratingInputEl.setAttribute("value", index + 1) 

    const starEl = createElement({type: 'img', target: ratingLabelEl})
    starEl.setAttribute("src", starOutline)

    ratingLabelEl.addEventListener('click', () => {
        const rating = ratingInputEl.value // 1
        const starElList = ratingWrapper.querySelectorAll('img') 
        const ratingInputElList = ratingWrapper.querySelectorAll('input')
        ratingInputElList.forEach((inputEl, index) => {
            starElList[index].src = index + 1 <= rating ? starActive : starOutline
        })
    })

})
    
    
const comprehensionHeadline = createElement({ type: 'h2', className: 'semibold-14 mb-20', target: form })
comprehensionHeadline.textContent = 'Comprehension:'
    
    
const comprehensionWrapper = createElement({type: 'fieldset', className: 'jfsa', target: form})
    Array(10).fill().forEach((_, index) => {
    const comprehensionLabelEl = createElement({type: 'label', target: comprehensionWrapper})
    const comprehensionInputEl = createElement({type: 'input', target: comprehensionLabelEl})
    comprehensionInputEl.setAttribute("type", "radio")
    comprehensionInputEl.setAttribute("name",  "comprehension") 
    comprehensionInputEl.setAttribute("value", index + 1) 

    const rectangleEl = createElement({type: 'img', target: comprehensionLabelEl})
    rectangleEl.setAttribute("src", rectangleOutline)

    comprehensionLabelEl.addEventListener('click', () => {
        const comprehension = comprehensionInputEl.value // 1
        const rectangleElList = comprehensionWrapper.querySelectorAll('img') 
        const comprehensionInputElList = comprehensionWrapper.querySelectorAll('input')
        comprehensionInputElList.forEach((inputEl, index) => {
            rectangleElList[index].src = index + 1 <= comprehension ? rectangleActive : rectangleOutline
            })
        })
})




const mottoHeadlineEl = createElement({ type: 'label', className: 'semibold-14 mb-20', target: form })
mottoHeadlineEl.textContent = 'Motto:'

const mottoAttributes = [{ attributeName: 'rows', attributeValue: '5' }]
const mottoInputEl = createElement({type: 'textarea', className: 'journal-create__input--small', target: mottoHeadlineEl})
mottoInputEl.name = "motto"

const notesHeadlineEl = createElement({ type: 'label', className: 'semibold-14 mb-20', target: form })
notesHeadlineEl.textContent = 'Note:'

const notesAttributes = [{ attributeName: 'rows', attributeValue: '10' }]
const notesInputEl = createElement({type: 'textarea', className: 'journal-create__input--big', target: notesHeadlineEl})
notesInputEl.name  = 'notes'

const buttonRow = createElement({target: form, className: 'jfsa'})
const cancelButton = Button({ target: buttonRow, text: 'Cancel', className: 'mb-20 white mt-24 w-200' })
cancelButton.addEventListener('click', cancelForm)
cancelButton.setAttribute("type", "button")
const saveButton = Button({target: buttonRow, text: 'Save ✓', className: 'mb-20 mt-24 orange w-200' })
saveButton.setAttribute("type", "submit")
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newCard = {}
    newCard.rating = form.rating.value
    newCard.title = today
    newCard.comprehension = form.comprehension.value
    newCard.motto = form.motto.value
    newCard.notes = form.notes.value
    saveCard(newCard)
})



    
    function displayForm() {
        display(section)
        console.log("displayForm")
    }
    
    function saveCard(newCard) {
        const updatedCards = [newCard, ...cards]
        localStorage.setItem('cards', JSON.stringify(updatedCards))
        displayNone(section)
        displayCards(updatedCards)
    }
    
    function cancelForm() {
        form.reset()
        displayNone(section)
        displayCards(cards)
    }

    function getCards() {
        const data = localStorage.getItem('cards')
        const cardsData = JSON.parse(data)
        return cardsData
    }

    return {displayForm}
}


