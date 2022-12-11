import styled from 'styled-components/macro'

/* Settings:
    - fontSize (string) default "1rem"
    - fontWeight (string) default 300
*/
export const TextButton = styled.button`
    border:none;
    background:none;
    font-size: ${({settings}) => settings?.fontSize || "1rem"};
    font-weight: ${({settings}) => settings?.fontWeight || "300"};
    color: ${({theme}) => theme.colors.fadedText};

    &:hover {
        cursor: pointer;
        color:${({theme}) => theme.colors.highlight};
    }
`