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
`;

export const Section = styled.div`
  background: #fafafa;
`;
