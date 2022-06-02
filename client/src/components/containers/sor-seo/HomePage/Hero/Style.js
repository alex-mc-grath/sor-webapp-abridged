import styled from 'styled-components/macro';

export const StyledHero = styled.div`

 
    /* // Mobile */
@media (max-width: 1000px){

    background-size: cover !important;

}
    /* // */


    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: url(${({mainImage}) => mainImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    /* background-size: 125%;*/
    background-size: 105%;
    width:100%;
    height: 100vh;
    overflow:hidden;
    transition: all 0.5s cubic-bezier(0.331, 0.441, 0.444, 1);

    &.zoomed{
        background-size: 155%;
        transition: all 0.5s cubic-bezier(0.331, 0.441, 0.444, 1);
    }
    
    h1{
        color: white;
        text-align:center;
        font-size:3rem;
        margin:0;
        padding:0;
        width: 50%;
    }

    svg{

    }



`;

