import styled from 'styled-components'

export const Layout = styled.div`

`;
    
export const Logo = ({src}) => {
    return (
    	<Layout>
            {console.log('test12',src)}
    		{/* {src && <img src={src} alt='logo' />} */}


            {/* if src is image */}

            {src &&
                alert(typeof src)
            }

            /static/media/baytaq-form.0755ab765a9b4a0cfa8e.png
            {/* can read    the end, the extension to see if png or svg? */}



            {/* if src is svg */}

            {src === undefined &&
                alert('undefinedg')
            }

            type: "svg"
            src.type = 'svg'


    	</Layout>
    )
}
