import styled from "styled-components"

const Container = styled.div`
max-width: 1200px;
height: ${props => props.h};
margin: ${props => props.m ? props.m : '0'} auto;
`

const GridContainer = styled.div`
width: ${props => props.theme.siteWidth};
max-width: ${props => props.theme.maxWidth};
display: grid;
grid-template-columns: ${props => props.columns ? (`repeat(${props.columns}, minmax(0 100px))`) : (`repeat(12, minmax(0 100px))`)} ;
grid-column-gap: 2.5%;
background: ${props => props.theme.colors.green};
`

const GridItem = styled.div`
grid-column: span ${props => props.span} / auto
`

const FlexContainer = styled(Container)`
max-width: 1200px;
height: ${props => props.h};
width: ${props => props.w ? (props.w) : (props.theme.siteWidth)};
display: flex;
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
${props => props.theme.media.phone}{
    flex-direction: column;
    align-items: center;
    text-align: center;
}
`

export { GridContainer, GridItem, FlexContainer }