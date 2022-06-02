import Lottie from "lottie-react";
import unlock from "../../../../../media/lottie/unlock.json";
import availableTwentyFour from "../../../../../media/lottie/available-24-hours.json";
import fireworks from "../../../../../media/lottie/shape-fireworks.json";
import styled from "styled-components";

const StyledLottie = styled(Lottie)`
    max-width: 200px;
    display: inline-block;
    margin:1rem;
`

export const LottieAnimations = () => {
    return (
        <center>
            <StyledLottie loop={true} animationData={unlock} />
            <StyledLottie loop={true} animationData={availableTwentyFour} />
            <StyledLottie loop={true} animationData={fireworks} />
        </center>
    )
};