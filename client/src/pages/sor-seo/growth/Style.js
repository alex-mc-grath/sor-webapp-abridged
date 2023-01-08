import styled from 'styled-components/macro';

export const StyledHowItWorks = styled.article`
 

 .hero{
  background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);


  h1{
    color: white;
    font-size: 1.5rem;
    width: 95%;
    text-align:center;
  }
 }

.lineBreakMobile{
  width:100%;
  display:block;
}

 .blending-in {
      flex-direction: column;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      display:flex;

      div{
        width: 90%;
      }

      .blendingIn-Image {
        width: 100%;
        height: 100%;
        background: url('/unsplash5.jpg');
        background-size: cover;
        /* background-size: 80%;
      background-position: bottom; */
        background-repeat: no-repeat;
        border-radius: 0 0 25px 25px;
        -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
        filter: blur(5px);
        margin-bottom:5rem;

        /* padding: 2rem; */
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        transition: 1s all cubic-bezier(1, 100, 1, 0);

        &:hover {
          -webkit-filter: blur(0px); /* Safari 6.0 - 9.0 */
          filter: blur(0px);
          transition: 1s all cubic-bezier(1, 100, 1, 100);
        }
        /* &:hover {
        background-size: cover;
        background-origin: content-box;
        padding: 2rem;
      } */
      }

      .slogan{
        font-size: 2.75rem;
      }
    }

    .authenticity {
      display: flex;
      justify-content: center
      align-items: center;
      width: 90%;
      margin: auto;
      text-align:left;

      button{
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
    }



 .mimicHuman{
  width: 90%;
  margin: 0 auto;
  /* flex-direction:row; */

  img{
    max-width: 50rem;
    margin: 3rem 0;
    
  }
  li{
    list-style: bullets;
  }

  
 }


    &.mimicHuman {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      ul {
        li {
          list-style: disc;
        }
      }

      .text-box {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        padding: 1rem;
        padding-left: 4rem;
      }

      img {
        border-radius: 25px;
      }
    }

    .bg-gradient{
      background: linear-gradient(-30deg, #000000,#130F40,#000000);  
      color:white;
    }


    .cta{
      border-radius: .8rem;
      width: 99.5%;
      margin: 0 auto;
      button{
        margin: 1rem auto;
      }
    }



    /* MEDIA */
    @media (min-width:900px){

.blending-in{

  >div {
  width:55%;
}
}

      .lineBreakMobile{
          display:unset;
        }

        .authenticity {
        width:55%;
        }

      .mimicHuman{
        flex-direction:row !important;
        img{
          margin-right: 5rem;
        }
      }
    }

    .cta{
      /* width: 99.5%; */
    }
`;
