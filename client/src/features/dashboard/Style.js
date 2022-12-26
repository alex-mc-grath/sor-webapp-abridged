import styled from 'styled-components';
import { AppLayout } from '../../_boilerplate/layouts/AppLayout';
// import Dashboard from '../../components/layouts/Dashboard'

// in this example this would mean there's a (entity) Dashboard in /pages, /features, /components(sandbox)

// export const Layout = styled(Dashboard)`
export const Layout = styled.div`
  /* background: pink !important; */
  width:100%;
    

  .title-navigation{
    font-size: 1.4rem;
    margin:0;
    color: #505050;
  }

  .campaign-name{
    font-size: 1.4rem;
    margin:0;
    font-weight:600;
    color: ${props=>props.theme.colors.secondary};
  }

  .fa-seedling{
    color: ${props=>props.theme.colors.secondary};
    transform: translateY(.2rem);
  }

    .temp-grey-placeholder{
        background: grey;
        width:100%;
        height: 40vh;
    }
`;