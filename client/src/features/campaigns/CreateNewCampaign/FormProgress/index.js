import styled from 'styled-components'
import { Label } from '../../../../components/elements/Label';

export const Layout = styled.div`
width:60%;
height: 100%;
font-size: 80%;
margin:3rem auto;
/* border: 2px dotted grey; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:flex-start;

.li-wrapper {
  position: relative;
  border-left: solid .4rem ${props=>props.theme.colors.secondaryShade1};
  border-left: solid .4rem #505050;
  padding-left: 3.1rem;
  /* padding-bottom: 2.3rem; */
  height:100%;


  &:last-of-type {
    border-left: solid .4rem transparent;
    padding-bottom: 0;
  }

  &:first-of-type {
    .circle {
      background: ${props=>props.theme.colors.secondary};
      border-color:white;
      
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
  left: -.8rem;
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  background: ${props=>props.theme.colors.secondaryShade2};
  border: solid 2px ${props=>props.theme.colors.black};
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

.number{
  position:relative;
  margin-right:3.5rem;

  &::before{
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    content:'';
    background: #000;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    z-index:-1;
  }
}
`;

export const Number = styled.span`
 margin-right:3.5rem;

  &::before{
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    content:'${props=>props.content}';
    background: ${props=>props.theme.colors.secondaryShade2};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    z-index:-1;
  }
`


export const FormProgress = ({setFormIndex}) => {
    let data = [{step:'Build TAL & TPL with automated scans'},{step:'Define Sequence'},{step:'Campaign settings'},{step:'[RECAP] Campaign objectives'}]
    return (
    	<Layout>

            {data.map((item,idx) => 
          <div key={idx} className="li-wrapper" onClick={()=>setFormIndex(idx - 1)}>
            <div className="circle"></div>
            <p className="main-item"><Number content={idx}/> {item.step}</p>
          </div>
         )}
    	</Layout>
    )
}


