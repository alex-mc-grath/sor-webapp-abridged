import styled from 'styled-components/macro';

export const StyledTechStack = styled.article`
  /* background: #001943; */
  color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-145deg, #0a0a0a, #1a1a40, #0a0a0a);
  background: white;
  /* min-height: 100vh; */

  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.4);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
		transform: translatey(0px);
	}
}

.logos{

  background: linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
  border-radius: 3rem;
  width: 95%;
  margin: 0 auto;

  .logo-holder{
    width:7.5rem;
    height:7.5rem;
    animation: float 6s ease-in-out infinite;
    border-radius:50%;
    padding: .8rem;
    margin: 1.5rem auto;

    background:rgba(255,255,255,0.86);

    &:hover{
      img{
        transform:scale(1.2);
      }
    }

  
    img{
      width:100%;
      height:auto;

      &.quick-width-fix{
        width:5px;
    border:2px solid pink;
      }
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
      /* background: linear-gradient(140deg, ${(props) => props.theme.colors.black}, #000, ${(props) => props.theme.colors.black}); */
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
  }}
`;
