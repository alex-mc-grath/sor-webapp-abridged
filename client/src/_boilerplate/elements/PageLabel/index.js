import styled from 'styled-components/macro'

export const StyledPageLabel = styled.div`
    
    text-align:left;

    & > div {
        color:${({theme}) => theme.colors.bright};
        display:inline-block;
        border-bottom: 2px solid ${({theme}) => theme.colors.underline};
        padding-right:1rem;
        font-size:1.5rem;
    }
`

export const PageLabel = ({children}) => {

    return (
        <StyledPageLabel>
            <div>{children}</div>
        </StyledPageLabel>
    )
}