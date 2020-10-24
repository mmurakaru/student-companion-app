import { createElement } from '../lib'
import '../../styles/components/Chart.css'

export default function Chart({ target }) {
    const chartEl = createElement({ className: 'chart mb-10', target })

    // SCALE
    const scaleEl = createElement({ className: 'scale', target: chartEl })
    const scaleLabelsEl = createElement({ className: 'scale__labels', target: scaleEl })
    const labels = ['100', '75', '50', '25', '0']
    labels.forEach(label => {
        const scaleLabelEl = createElement({ target: scaleLabelsEl })
        scaleLabelEl.innerText = label
    })
    const scaleLinesEl = createElement({ className: 'scale__lines', target: scaleEl })
    labels.forEach(line => {
        const scaleLineEl = createElement({ target: scaleLinesEl })
    })

    // GRAPH
    const graphContainerEL = createElement({ className: 'graph-container', target: chartEl })
    const graphCols = ['10:00', '15:30', '16:15', '18:25', '19:00']
    graphCols.forEach((colLabel, index) => {
        const graphColEL = createElement({ className: `graph__col graph__col--${index + 1}`, target: graphContainerEL })
        const graphBarsEl = createElement({ className: 'graph__bars', target: graphColEL })
        const graphBar1El = createElement({ className: 'graph__bar graph__bar--1', target: graphBarsEl })
        const graphBar2El = createElement({ className: 'graph__bar graph__bar--2', target: graphBarsEl })
        const graphBarLabelEl = createElement({ className: 'graph__bar__label', target: graphColEL })
        graphBarLabelEl.innerText = colLabel
    })

    // LABELS
    const chartLabelsEL = createElement({ className: 'chart__labels', target: chartEl })
    const chartLabel1EL = createElement({ type: 'span', className: 'chart__label--1 mr-10', target: chartLabelsEL })
    chartLabel1EL.innerText = 'Other Students'
    const chartLabel2EL = createElement({ type: 'span', className: 'chart__label--2', target: chartLabelsEL })
    chartLabel2EL.innerText = 'You'
    return chartEl
}