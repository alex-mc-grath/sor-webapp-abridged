import Lottie from 'lottie-react';
import unlock from '../../../../media/lottie/unlock.json';
import styled from 'styled-components';

const StyledLottie = styled(Lottie)`
  max-width: 50px;
  display: inline-block;
  margin: 0 1rem;
`;

export const LoginAnimation = () => {
  return (
    <center>
      <StyledLottie loop={false} animationData={unlock} />
    </center>
  );
};
