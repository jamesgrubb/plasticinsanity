import { createGlobalStyle } from "styled-components"
import {CopernicusBoldWOFF, CopernicusBoldOTF,CopernicusBookWOFF, CopernicusBookOTF} from "./fonts"

import normalize from "styled-normalize"
export default createGlobalStyle`
    ${normalize};
    @import url('https://fonts.googleapis.com/css?family=Rob    oto,300:700&display=swap');
    
    :root{
        --text-base-size: 1em;
        --space-unit: 1em;
        --space-xxs:  calc(0.25 * var(--space-unit));
        --space-xs:   calc(0.5 * var(--space-unit));
        --space-sm:   calc(0.75 * var(--space-unit));
        --space-md:   calc(1.25 * var(--space-unit));
        --space-lg:   calc(2 * var(--space-unit));
        --space-xl:   calc(3.25 * var(--space-unit));
        --space-xxl:  calc(5.25 * var(--space-unit));
    }
    
    body{
        font-size: var(--text-base-size);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    }
    @font-face{
        font-family: "CopernicusTrial-Bold";
        font-style: normal;
        font-weight: normal;
        src: local('CopernicusTrial-Bold'), local('CopernicusTrial-Bold'), url(${CopernicusBoldWOFF}) format("woff"), url(${CopernicusBoldOTF}) format("otf");
    } 
    @font-face{
        font-family: "CopernicusTrial-Book";
        font-style: normal;
        font-weight: normal;
        src: local('CopernicusTrial-Book'), local('CopernicusTrial-Book'), url(${CopernicusBookWOFF}) format("woff"), url(${CopernicusBookOTF}) format("otf");
    } 
`