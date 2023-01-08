import styled, { css } from "styled-components";

export const Layout = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Libre+Caslon+Text:wght@100;200;300;400;500;600;700;800;900:ital@1&display=swap');


    p{
        font-family:'Libre Caslon Text';
        font-family:'Source Sans Pro';
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: -0px;
        margin:0;
        margin-top: 0.6rem;

        &.description{
            font-size: 1.4rem;
            font-family: 'Source Sans Pro'
        }
        
    }

    li{
        font-family:'Source Sans Pro';
    }


    .test-img{
        width:100%;
        margin: 0 auto;
        border-radius: 1.6rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: all 0.4s ease-in-out;

@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.4);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-7px);
	}
	100% {
		/* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
		box-shadow: 0 22px 13px 0px rgba(0,0,0,0.29);
		/* transform: translatey(0px); */
		transform: translatey(-5px);
	}
}
/* border: 2px white solid; */

&:hover{
	/* width: 125px;
	height: 125px; */
	/* box-sizing: border-box; */
	/* border-radius: 50%; */
	overflow: hidden;
	box-shadow: 0 10px 15px 0px rgba(0,0,0,0.8);
	transform: translateY(0px);
	animation: float 2.2s ease-in-out forwards;
    transition: all 0.4s ease-in-out;
	img { width: 100%; height: auto; }
}

    }
`;

export const Section = styled.div`
    display:flex;
    position:relative;
    background: ${props => props.background};
    width:100%;
    min-height:100vh;
    margin: 7rem auto;

    &:nth-of-type(1){
       margin:0;
    }

`

export const Img = styled.img`
    position: absolute;
    width:46vw;
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    border-radius: 1.6rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    

    &:nth-of-type(1){
        transform: rotate3d(-.6, .6, .6, -5deg);
    }
    
    &:nth-of-type(3){
        transform: rotate3d(-.6, .6, .6,  10deg);
    }
    &:nth-of-type(2){
        transform: rotate3d(-.1, .1, .1, 1deg);
    }

    &:last-of-type{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const Container = styled.div`
    /* position:relative; */
    width:100%;
    max-width:1600px;
    margin: 5rem auto;
    width: 92%;
    height:94%;

    @media (max-width:50rem){
    ${props => props.mobile && css`
        >*:not(:first-child,:nth-child(2)){
            display:none;
            
        }
        >*:first-child{
            transform: rotate3d(-.0, .0, .0, -0deg) !important;
            width:100%;
            position:relative;
            right:0;
            top:0;
        }
        >*:nth-child(2){
            transform: rotate3d(-.0, .0, .0, -0deg) !important;
            width:100%;
            position:relative;
            right:0;
            top:0;
        }
        `}
    }

`;

export const H2 = styled.h2`
    
`;

export const TextContainer = styled.div`
    padding: 0 0rem;
    width:90%;
    height: 100%;
`;
export const Label = styled.div`
    font-family: 'Inter';
    font-weight:600;
    font-size: 1.8rem;
`;
export const Badge = styled.span`
    background: ${props => props.color ? props.color : '#333333'};
    color:white;
    padding: 0.3rem 2rem;
    margin: 0 0rem;
    border-radius:1.5rem;
    font-size: 1.2rem;
    font-weight:medium;
    display:flex;
    justify-content:center;
    align-items:center;

    &:nth-of-type(1){
        width: 35%;
    }
    &:nth-of-type(2){
        /* width: 35%; */
        width:50%;
    }
`;

export const StyledNameSignature = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    bottom:0;
    height: 30vh;
    padding: 0rem 5rem;  

    @media (min-width : 400px){
        width:100%;
    }
`;

export const Slug = styled.span`
            text-transform: uppercase;
            font-size:2.5rem;
            font-family:'Inter';
            letter-spacing: .5px;
            width:3rem;
`;

export const Name = styled.span`
    font-size:4.5rem;
    font-family:'';
`;

export const Subject = styled.span`
    font-size:1.7rem;
    font-family:'Inter';
    font-weight:500;
    text-transform: uppercase;
    background: linear-gradient(10deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
`;

export const Logo = styled.img`
    
`;

export const List = styled.ul`
        font-size: 1.4rem;
        padding:0;
        width:fit-content;
        

        li{
            /* list-style-type:"→"; */

        ::marker{
                background: #000;
            }
        }
`;