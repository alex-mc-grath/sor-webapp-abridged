import styled from 'styled-components';

export const StyledClientLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50vh;

  h2 {
    text-align: center;
  }

  img {
    position: relative;
    width: 130px;
    // min-height: fit-content;
  }

  .client-group-boxes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .client-logo-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* @include flexContainer(column, center, center); */
    width: 160px;
    height: 160px;

    margin: 0.3rem 0.7rem;
    margin: auto;
    padding: 0 0.8rem;
    transition: all 0.6s ease-in-out;
    /* border-bottom: 1px solid #e2e2e2; */
    border-radius: 35px;
    background: linear-gradient(145deg, #ffffff, #ffffff);
    /* box-shadow: 20px 20px 31px #fafafa, -20px -20px 31px #fafafa; */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    &:hover {
      -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }
  }

  @media (max-width: 1000px) {
    .client-group-boxes {
      flex-wrap: wrap;
      /* display: none; */
    }
  }
`;
