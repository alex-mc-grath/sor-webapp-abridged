import styled from 'styled-components';

export const StyledResourcesOverview = styled.article`
  background: white;

  .header {
    background-image: linear-gradient(180deg, #fff 10%, #eef0f7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;

    h1,
    p {
      text-align: center;
    }

    .small-container {
      width: 60%;
    }
  }

  #back {
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
  }

  h1,
  h2 {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3rem;
  }
`;

export const StyledResourcePage = styled.article`
  background: blue;
`;

export const Container = styled.div`
  height: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: flex;
  justify-content: center;
  width: 60%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  > div {
    padding: 2rem 0;
  }

  p {
    margin-bottom: 1.1rem;
    margin-right: auto;
  }

  .reference {
    font-size: 1rem;
    color: darkblue;
  }
`;

export const Section = styled.div`
  /* background: #fafafa; */
  font-size: 2rem;
  margin: 3.5rem auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .key-stat{
    max-width:550px;
  }

  ul {
    position: relative;
    width:500px;
    margin:auto;
    li {
      left: 0rem;
      transform: translateX(-0rem);
      transition: all .35s ease-in-out;
      
      &:hover {

        &:before{
          content:'> ';
          font-weight:bold;
          position:absolute;
          left: -2rem;
          transform: translateX(-5rem);
          transition: all .35s ease-in-out;
        }
    margin:0 5px 0 -15px;
    color: #f00;
}
      }
    }
  }


`;
