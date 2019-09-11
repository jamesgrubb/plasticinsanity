import React from "react";
import {variant, layout, color, space, typography, system, flexbox, compose} from "styled-system"
import styled from "styled-components"
import css from '@styled-system/css'

const textDecoration = system({
    prop: 'textDecoration',
    cssProperty: 'textDecoration',
  })

 const buttonBadge = variant({
     prop: 'badge',
     key: 'buttonBadge'
 }) 

const buttonStyle = variant({
    prop: 'design',
    key: 'buttonStyles'
})  

const buttonSize = variant({
    prop: 'size',
    key: 'buttonSizes'
  })
  
  const linkProps = compose(
      space,
      typography,
      color,
      textDecoration
  )

  const Link = styled.a`
    ${css({
        color: 'primary',
        bg: ['primary','secondary'],
        '&:hover': {
            color: 'secondary'
        }     
    })};
    &:hover{
        ${css({
        bg: ['primary']     
    })};
    }
    ${linkProps};
    ${system({
      textDecoration: true,
      fontWeight: {
        property: 'fontWeight',
        scale: 'fontWeights',
      },
    })}
    font-size: 1.2rem;    
  `

const Box = styled.div`
${color};
${layout};
${space};
${typography};
${flexbox};
display: flex;
`
const H = styled.h1`
    writing-mode: vertical-lr
    ${space}
    ${color}
    ${typography}
    ${flexbox}
`

const Button = styled.button`
${space};
${buttonStyle};
${buttonSize};
${buttonBadge};
display: flex;
align-items: center;
justify-content: center;
align-self: center;
border-color: transparent;
border-width: 3px;
border-style: solid;
font-weight: 300;
letter-spacing: 0.6px;
${css({
    fontFamily: 'sans',
    px: '2',
    py: '1'
})}
${props=> props.badge && ({
    borderRadius:'999px',
    })}
`

export default ({children}) => 
<Box height={'100vh'} alignItems={['center', 'baseline']} justifyContent={['space-between']} flexDirection={['column','row']} as="header" textAlign={['center','left']} mx="auto" width={0.9} fontFamily="serif" color="primary">
    <Button  design="danger" size="medium">Button</Button>
    <Button badge design="danger" size="large">Button</Button>
    <Link px="3em" py="4em" href="#0" fontFamily="sans"  textDecoration="none" >Hello</Link><H as="h2" my={0} alignSelf="flex-end" px="3em" py="4em">Styled</H></Box>

