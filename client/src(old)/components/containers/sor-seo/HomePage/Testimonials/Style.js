import styled from 'styled-components';

export const StyledTestimonials = styled.div`
   display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:70vh;
    width: 85%;
    align-items:flex-start;
    margin:auto;
    padding-bottom: 5rem;


    .xl{
        font-size:4rem;
    }
    

    @media(min-width: 800px) {
        width:85%;
        margin:0 auto;
        /* margin-left: 6rem; */
        /* margin-right:auto; */
        min-height:70vh;
        
        h2{
            margin-bottom:7rem;
        }

        >div{
            width:44%;
            padding: 1.4rem 0;
        }

        >div:first-of-type{
            margin-right:auto;
        }

        >div:nth-of-type(2){
            margin-left:auto;
        }
    }
`;