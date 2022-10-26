//https://tailwindui.com/#components
//https://react-bootstrap.github.io/components/alerts
//https://chakra-ui.com/docs/components/overview
//https://mui.com/material-ui/react-button/

import {TailwindLayout} from './TailwindLayout'
import styled from 'styled-components/macro'

const StyledUIFramefork = styled.div`
    font-size: 100%;
`

export const UIFrameworks = () => {
    return (
        <StyledUIFramefork>
            <TailwindLayout />
        </StyledUIFramefork>
    )
}