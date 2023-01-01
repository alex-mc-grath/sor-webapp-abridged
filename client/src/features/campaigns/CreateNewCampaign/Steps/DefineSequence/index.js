import styled from 'styled-components'
import { DarkCard } from '../../../../../components/layouts/DarkCard';

export const Layout = styled.div`
        width: 100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        /* justify-content:center; */

        h4{
            margin-top:3rem;
        }
    .box{
        position:relative;
        background: ${props=>props.theme.colors.secondaryShade1};
        width: 10rem;
        height: 10rem;
        margin: 0 2rem;
        border-radius: 1rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        color:white;
        border: .3rem solid ${props=>props.theme.colors.secondary};

       
        
        &.edit{
            color:white;
            border: .3rem dotted ${props=>props.theme.colors.secondary};

            &:hover{
            cursor:pointer;
            i{
                color:${props=>props.theme.colors.secondary};
            }
        }
        }

        .action{
            font-size:1.2rem;
        }




        &:last-of-type:before{
                display:none;
                background: #000;
            }

        &:before{
            content:'➡';

            position:absolute;
            color:white;
            top:50%;
            right:-27%;
            transform:translate(-0%,-50%);

           
        }
    }
`;

export const Boxes = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* width: 80%; */
    margin: 0 auto;
    height: 100%;

`;
    
export const DefineSequence = ({campaign, manager, formIndex}) => {
    return (
    	<Layout>
            <DarkCard align='flex-start' justify='flex-start' height='100%' gap='0rem'>
            <h3>Define sequence (automated actions)</h3>
            <Boxes>
            <div className='box edit'><i class="fa-solid fa-circle-plus"></i></div>
    		    <div className='box'>
                      <i className="fa-solid fa-text"></i>
                      <span className="action">visit profile</span>
                  </div>
                  <div className='box'>
                      <i className="fa-solid fa-user"></i>
                      <span className="action">invite</span>
                  </div>
                  <div className='box'>
                      <i className="fa-solid fa-message"></i>
                      <span className="action">message</span>
                  </div>
            </Boxes>
            </DarkCard>
    	</Layout>
    )
}
