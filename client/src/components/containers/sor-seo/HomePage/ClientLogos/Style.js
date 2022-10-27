import styled from 'styled-components';

export const StyledClientLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* align-items: center; */
  /* display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  width: 100%;
  /* padding: 4rem auto; */
  /* min-height: 40vh; */

  background: #fafafa;

  &::before{
    position: absolute;
    content:'';
    width:100%;
    height:50%;
    top:0;
    background: white;
  }

  h2 {
    text-align: center;
  }

  img {
    position: relative;
    width: 100%;
    /* // min-height: fit-content; */
  }

  .client-group-boxes {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
    display:grid;
    grid-template-columns: 1fr 1fr;
  }

  .client-logo-box,svg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* @include flexContainer(column, center, center); */
    /* width: 100px; */
    height: 100px;
    /* width:auto; */
    max-width: 100px;

    margin: 0.3rem 0.7rem;
    margin: 3rem auto;
    padding: 0 0.8rem;
    transition: all 0.6s ease-in-out;
    /* border-bottom: 1px solid #e2e2e2; */
    border-radius: 35px;
    /* background: linear-gradient(145deg, #ffffff, #ffffff); */
    /* box-shadow: 20px 20px 31px #fafafa, -20px -20px 31px #fafafa; */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    &:nth-of-type(1){
      transform: scale(1.15) translateY(-0.2rem);
    }
    &:nth-of-type(3),&:nth-of-type(4){
      transform: scale(1.3);
    }

    &:hover {
      -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }
  }

  @media (min-width: 1000px) {
    .client-group-boxes {
      flex-wrap: wrap;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* display: none;*/
`;
