import styled, { css } from 'styled-components';
import {Img as Img_b} from '../../../_boilerplate/elements/Img'

export const Img = styled(Img_b)`
    width:${props=>props.width || '100%'};


    ${props=>props.notDraggable && css`
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    `}
`;