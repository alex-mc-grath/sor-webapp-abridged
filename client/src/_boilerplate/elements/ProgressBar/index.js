import styled from 'styled-components';

const StyledProgressBar = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
  height: 0.9rem;
  background: #1f1f1f;
  box-shadow: 2px 14px 15px -7px rgba(30, 166, 250, 0.36);
  border-radius: 50px;
  transition: all 0.5s;
`;

const Progress = styled.div`
  width: calc(${(props) => props.progress + '%' || '15px'} - 2px);
  height: .7rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
  margin-left: 1px;
  background: ${props=>props.theme.colors.secondary};
   /* || ${(props) => props.theme.colors.primary}; */
  border-radius: 20px;
  box-shadow: 0px 10px 50px #abb7e9;
`;

export const ProgressBar = ({ progress }) => {
  return (
    <StyledProgressBar>
      <Progress progress={progress} />
    </StyledProgressBar>
  );
};
