import {useRef, useEffect} from 'react'
import styled from "styled-components/macro";
import withAssetLoader from "../../../../hoc/withAssetLoader";

let polygonImages = [];
for(let i=1;i<=20;i++)
{
    polygonImages.push(`/polygonFrames/polygon_${String(i).padStart(2,'0')}.png`)
}



const StickyContainer = styled.div`

    margin-top:2rem;
    height:130vh;

    .sticky {
        position: sticky;
        top: 30vh;
        text-align: center;
    }

    canvas {
        max-width: 100%;
        aspect-ratio: 1;
    }
`


export const ScrollAnimation = withAssetLoader({"images": polygonImages}, ({assetController}) => {

    const myCanvas = useRef()
    const ctx = useRef(null)
    const sticky = useRef()
    const frameNumber = useRef(0)

    const onScroll = () => {
        let stickBoundingRect = sticky.current.getBoundingClientRect()
        let start = stickBoundingRect.top
        let length = stickBoundingRect.height
        let scrollY = window.scrollY
        let newFrame = 0

        if(scrollY >= start+length)
        {
            newFrame = 20
        }
        else if(scrollY >= start)
        {
            newFrame = Math.ceil(20*(scrollY-start)/length)
        }

        if(newFrame !== frameNumber.current)
        {
            frameNumber.current = newFrame
            ctx.current.clearRect(0,0,512,512)
            ctx.current.drawImage(assetController.images[`/polygonFrames/polygon_${String(newFrame).padStart(2,'0')}.png`],0,0)
        }
    }

    useEffect(() => {
        if(myCanvas.current)
        {
            ctx.current = myCanvas.current.getContext('2d')
            window.onscroll = onScroll

            return () => {
                window.onScroll = null;
            }
        }
    }, [myCanvas])

    return (
        <>
        <center><h1>Scroll Down</h1></center>
        <StickyContainer>
            <div className="sticky" ref={sticky}>
                <center><canvas ref={myCanvas} width="512px" height="512px" /></center>
            </div>
        </StickyContainer>
        <center><h1 style={{marginBottom: "100vh"}}>Polygon</h1></center>
        </>
    )

})