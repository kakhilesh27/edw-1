import {initNavbar} from "./js/navbar.js";
import {initLogotypes} from "./js/logotypes.js";
import {initSubheading} from "./js/subheading.js";
import {initServices} from "./js/services.js";
import {initCaseStudies} from "./js/caseStudies.js";
import {initProcessBlock} from "./js/processBlock.js";
import {initTeam} from "./js/team.js";
import {initTestimonialCards} from "./js/testimonialCards.js";
import {initSlider} from "./js/slider.js";
import {initContactForm} from "./js/contact.js";
import {initRadioButtons} from  "./js/radio.js";
import {initToast} from "./js/toast.js";
import { initFooter } from "./js/footer.js";


export const initMain = (data) => {
    initNavbar(data.frame10_data);
    initLogotypes();
    initSubheading(data.subheading_data);
    initServices();
    initCaseStudies();
    initProcessBlock();
    initTeam();
    initTestimonialCards();
    initSlider();
    initContactForm();
    initRadioButtons();
    initToast();
    initFooter();
};

