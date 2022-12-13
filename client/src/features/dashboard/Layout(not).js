import styled from 'styled-components';
import Dashboard from '../../components/layouts/Dashboard'

export const Style = styled(Dashboard)`
    
`;

// this is NOT GOOD, redundant, and not flexible, how do you manage a quick change in design?

export const Layout = ({children}) => {
  return (
    <Style>{children}</Style>
  )
}
