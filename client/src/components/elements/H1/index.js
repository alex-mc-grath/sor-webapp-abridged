import styled from 'styled-components';
import { H1 as H1b } from '../../../_boilerplate/elements/H1';

export const H1 = styled(H1b)`
  font-size: 2.3rem;
  color: ${props=>props.theme.colors.primary};
`;
