import styled from 'styled-components/macro';


let headerHeight = 8
let borderWidth = headerHeight * 1

export const StyledHeader = styled.header`
    display:flex;
    position: fixed;
    top: 0rem; right: 0rem;
    width:100%;
    height: ${headerHeight}rem;
    background: #0c0c0c;
    background: #001016;
    z-index:1;

    &::before{
         content: '';
        position: absolute;
        top: 0rem; left: 0rem;
        /* border-top: calc(${headerHeight}+1)rem solid #282828; */
        /* ${props => props.takeViewportHeight && `min-height: calc(100vh - 16px);`} */
        border-top: ${borderWidth}rem solid ${props=>props.mainColor};
        border-top: ${borderWidth}rem solid #282828;
        border-top: ${borderWidth}rem solid ${props=>props.openMenu ? '#282828' : '#08a2e5'};
        border-top: ${borderWidth}rem solid ${props=>props.openMenu ? props=>props.theme.colors.secondary : props=>props.theme.colors.secondaryShade1};
        border-left: ${borderWidth}rem solid #080808;
        border-left: ${borderWidth}rem solid #001016;
        border-left: ${borderWidth}rem solid ${props=>props.theme.colors.secondaryShade2};
        width: 0;
    }

   
`;