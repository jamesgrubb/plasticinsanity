import styled from "styled-components"
import {flexbox, space, compose, borderRadius} from "styled-system"
import css from "@styled-system/css"

export const Buttons = styled.button`
${compose(
    space,
    fexbox
)}
${css({
    bg: 'primary'
})}
`