import styled from 'styled-components';

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: flex-start;
  margin: ${(props) => props.margin || '2rem auto'};
  label {
    color: #969ba0;
    font-size: 1.4rem;
  }
`;
