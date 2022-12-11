import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ layout: { left, right, leftWeight = 1, rightWeight = 1 } }) => {
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
