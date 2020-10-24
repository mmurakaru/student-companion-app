import { createElement, createElementPlaceStart } from '../lib'
import '../../styles/styles.css'
import '../../styles/components/JournalCard.css'
import starActive from '../../assets/star-active.svg'
import starInactive from '../../assets/star-inactive.svg'
import rectangleActive from '../../assets/rectangle-active.svg'
import rectangleInactive from '../../assets/rectangle-inactive.svg'


export default function JournalCard({target, card}) {
    const cardEl = createElement({type: 'section', className: 'w-full journal-card box-shadow--blue mb-20', target})
    const headline = createElement({ type: 'h2', className: 'semibold-14--uppercase mb-20', target: cardEl })
    headline.textContent = card.title
    
    const ratingHeadline = createElement({ type: 'h3', className: 'regular-12--light-blue mb-10', target: cardEl })
    ratingHeadline.textContent = 'Rating:'

    const ratingContainer = createElement({className: 'journal-card__rating mb-20', target: cardEl})
    
    Array(5).fill().forEach(star => {
        const starEl = createElement({type: 'img', className: 'journal-card__star', target: ratingContainer})
        //starEl.src = starInactive
    })
    
    const starsEl = cardEl.querySelectorAll('.journal-card__star')
    
    starsEl.forEach((starEl, index) => {
        starEl.src = index < card.rating ? starActive : starInactive
    })   


    const comprehensionHeadline = createElement({ type: 'h3', className: 'regular-12--light-blue mb-10', target: cardEl })
    comprehensionHeadline.textContent = 'Comprehension:'

    const comprehensionContainer = createElement({className: 'journal-card__comprehension mb-20 ', target: cardEl})

    Array(10).fill().forEach(box => {
        const boxEl = createElement({type: 'img', className: 'journal-card__rectangle', target: comprehensionContainer})
        boxEl.src = rectangleInactive
    })

    const boxEl = cardEl.querySelectorAll('.journal-card__rectangle')

    boxEl.forEach((boxEl, index) => {
        boxEl.src = index < card.comprehension ? rectangleActive : rectangleInactive
    }) 
   

    const mottoHeadline = createElement({ type: 'h3', className: 'regular-12--light-blue mb-10', target: cardEl })
    mottoHeadline.textContent = 'Motto:'
    const mottoHeadlineText = createElement( {type: 'p', className: 'semibold-16 mb-20', target: cardEl})
    mottoHeadlineText.textContent = card.motto


    const notesHeadline = createElement({ type: 'h3', className: 'regular-12--light-blue mb-10', target: cardEl })
    notesHeadline.textContent = 'Notes:'
    const notesHeadlineText = createElement( {type: 'p', className: 'regular-12--dark-blue', target: cardEl})
    notesHeadlineText.textContent = card.notes

    
}


// card {
//     title, rating, comprehension, motto, notes
// }