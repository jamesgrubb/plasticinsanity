import React, {Fragment} from "react"
import {ThemeProvider} from "styled-components"
import {theme} from "../utils/theme"
import Layout from "../components/Layout/Layout"
// import {Container} from "../components/Container/Container"
import createGlobalStyle from "../shared/css/GlobalStyles"
import {SiteTitle} from "../components/SiteTitle/siteTitle"



const GlobalStyle = createGlobalStyle
    

export default () => 
<ThemeProvider theme={theme}><Fragment><GlobalStyle /><Layout><SiteTitle>Hello from global styles</SiteTitle><p>Subtitle</p></Layout></Fragment></ThemeProvider>


