import styled from 'styled-components/macro';

export const StyledTechStack = styled.article`
  /* background: #001943; */
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */

  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.logos{

  .logo-holder{
    width:12rem;
    height:12rem;
    animation: float 6s ease-in-out infinite;
    border-radius:50%;
    padding: .8rem;
    margin: 1.5rem;

  
    img{
      width:100%;
      height:auto;
  }
}

  .number-style {
    color: white;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    width: 26px;
    height: 26px;
    padding: 5px;
    text-align: center;
    font: 23px Arial, sans-serif;
    transform: translateX(-7px);
    z-index: 0;
    color: black;
  }

  > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid white;
    width: 80%;
    height: 70vh;
    /* background: url('${(props) => props.img}'); */
    background-position: 0% 58% !important;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      background: linear-gradient(140deg, ${(props) => props.theme.colors.black}, #000, ${(props) => props.theme.colors.black});
      width: 100%;
      height: 100%;
      opacity: 0.6;
      z-index: 0;
    }

    > div {
      /* width: 50%; */
      /* padding: 4rem; */
      margin: 0 auto;
      z-index: 2;

      ul {
        font-size: 2rem;

        li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          margin: 1rem auto;

          :nth-child(1) > .number-style {
            /* background: linear-gradient(${(props) => props.theme.colors.black}, ${(props) => props.theme.colors.primary})); */
            background: ${(props) => props.theme.colors.primary};
          }
          :nth-child(2) > .number-style {
            /* background: linear-gradient(${(props) => props.theme.colors.black}, ${(props) => props.theme.colors.secondary}); */
            background: ${(props) => props.theme.colors.secondary};
          }
          :nth-child(3) > .number-style {
            /* background: linear-gradient(${(props) => props.theme.colors.black}, ${(props) => props.theme.colors.tertiary}); */
            background: ${(props) => props.theme.colors.tertiary};
          }
        }
      }
    }
  }
`;
