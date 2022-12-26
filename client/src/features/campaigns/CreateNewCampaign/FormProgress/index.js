import styled from 'styled-components'
import { Label } from '../../../../components/elements/Label';

export const Layout = styled.div`
width:100%;
height: 100%;
font-size: 80%;
border: 2px dotted grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:flex-start;

.li-wrapper {
  position: relative;
  border-left: solid .4rem ${props=>props.theme.colors.secondaryShade1};
  padding-left: 1.6rem;
  /* padding-bottom: 2.3rem; */
  height:100%;

  &:last-of-type {
    border-left: none;
    padding-bottom: 0;
  }

  &:first-of-type {
    .circle {
      background: ${props=>props.theme.colors.secondary};
      
    }

    p.main-item {
      font-weight: bold;
      color: ${props=>props.theme.colors.secondary};
    }
  }
}

.li-last {
  position: relative;
  padding-left: 2rem;
}

.circle {
  position: absolute;
  left: -6.5px;
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  background: ${props=>props.theme.colors.secondaryShade2};
  border: solid 2px ${props=>props.theme.colors.secondary1};
  border-radius: 50%;
}

.circle-last {
  left: -6px;
}

.myborder {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
}

p {
  margin: 0;
  transform: translateY(-4px);
  color:#505050;
  font-size: 1.3rem;
font-weight: 600;

  &.timestamp {
    color: #a5a5a5;
    /* font-size: 1rem; */
  }
}
`;


export const FormProgress = ({setFormIndex}) => {
    let data = [{step:'1) Build TAL & TPL with automated scans'},{step:'2) Define Sequence'},{step:'3) Campaign settings'},{step:'Campaign objectives & financials'}]
    return (
    	<Layout>

            {data.map((item,idx) => 
          <div key={idx} className="li-wrapper" onClick={()=>setFormIndex(idx - 1)}>
            <div className="circle"></div>
            <p className="main-item">{item.step}</p>
          </div>
         )}
    	</Layout>
    )
}


