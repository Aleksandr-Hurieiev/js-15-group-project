import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export const accordionFaq = new Accordion('.accordionFaq-container', {
duration: 500,
showMultiple: true,
elementClass: 'ac',
triggerClass: 'ac-trigger',
panelClass: 'ac-panel',
});
