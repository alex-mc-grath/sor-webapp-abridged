import React, {useState} from 'react'
import styled from 'styled-components';

const StyledSvg = styled.svg`
    height:100vh;

    path{
        border:2px solid blue;

        &:hover{
            /* fill: grey !important; */
        }
    }

    .test{
        fill: green !important;
        transform: matrix(0 -3.4431 3.4431 0 -1091.5 2020.4) !important;
        
        animation: all 2s ease-in-out;
    }

`;

const Path = (props) => {

    const [state, setState] = useState(null)

    const onHover = (props) => {
        props.target.style = "fill:black";
        props.target.style = "opacity: 0.8";
        console.log(props.target.style);
        console.log(props.target.id);
        setState(props.target.id)
    }

    const onExit = (props) => {
        // props.target.style = "fill:purple";

    }

    const onClick= (props) => {
        props.target.classList.add('test')
    }
    
    return <><path onMouseDown={onClick} onMouseEnter={onHover} onMouseLeave={onExit} {...props} /></>
}

const SvgTest = () => {

    

  return (

    <StyledSvg
    //  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:ns1="http://sozi.baierouge.fr" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg2" viewBox="0 0 720 720" version="1.1" inkscape:version="0.91 r13725"
     >
      
      <g id="layer1" transform="translate(0 -332.36)">
        <Path id="path2841" style={{fill:"#80ff00"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(3.4431 0 0 3.4431 -968.05 -759.1)"/>
        <Path id="path2843" style={{fill:"#ff0000"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(0 -3.4431 3.4431 0 -1091.5 2020.4)"/>
        <Path id="path2845" style={{fill:"#ff4000"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(.89114 -3.3258 3.3258 .89114 -1385.7 1599.5)"/>
        <Path id="path2847" style={{fill:"#ff8000"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(1.7215 -2.9818 2.9818 1.7215 -1561 1116.8)"/>
        <Path id="path2849" style={{fill:"#ffc000"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(2.4346 -2.4346 2.4346 2.4346 -1605.4 605.09)"/>
        <Path id="path2851" style={{fill:"#ffff00"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(2.9818 -1.7215 1.7215 2.9818 -1515.9 99.382)"/>
        <Path id="path2853" style={{fill:"#c0ff00"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(3.3258 -.89114 .89114 3.3258 -1298.5 -365.92)"/>
        <Path id="path2855" style={{fill:"#40ff00"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(3.3258 .89114 -.89114 3.3258 -547.13 -1053.4)"/>
        <Path id="path2857" style={{fill:"#00ff00"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(2.9818 1.7215 -1.7215 2.9818 -64.392 -1228.7)"/>
        <Path id="path3631" style={{fill:"#00ff40"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(2.4346 2.4346 -2.4346 2.4346 447.27 -1273)"/>
        <Path id="path3633" style={{fill:"#00ff80"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(1.7215 2.9818 -2.9818 1.7215 952.98 -1183.5)"/>
        <Path id="path3635" style={{fill:"#00ffc0"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(.89114 3.3258 -3.3258 .89114 1418.3 -966.1)"/>
        <Path id="path3637" style={{fill:"#00ffff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-5.6548e-16 3.4431 -3.4431 -5.6548e-16 1811.5 -635.69)"/>
        <Path id="path3639" style={{fill:"#00c0ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-.89114 3.3258 -3.3258 -.89114 2105.7 -214.77)"/>
        <Path id="path3641" style={{fill:"#0080ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-1.7215 2.9818 -2.9818 -1.7215 2281 267.97)"/>
        <Path id="path3643" style={{fill:"#0040ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-2.4346 2.4346 -2.4346 -2.4346 2325.4 779.63)"/>
        <Path id="path3645" style={{fill:"#0040ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-2.9818 1.7215 -1.7215 -2.9818 2235.9 1285.3)"/>
        <Path id="path3677" style={{fill:"#4000ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-3.3258 .89114 -.89114 -3.3258 2018.5 1750.6)"/>
        <Path id="path3679" style={{fill:"#8000ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-3.4431 -5.6548e-16 5.6548e-16 -3.4431 1688 2143.8)"/>
        <Path id="path3681" style={{fill:"#c000ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-3.3258 -.89114 .89114 -3.3258 1267.1 2438.1)"/>
        <Path id="path3683" style={{fill:"#ff00ff"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-2.9818 -1.7215 1.7215 -2.9818 784.39 2613.4)"/>
        <Path id="path3685" style={{fill:"#ff00c0"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-2.4346 -2.4346 2.4346 -2.4346 272.73 2657.8)"/>
        <Path id="path3687" style={{fill:"#ff0080"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-1.7215 -2.9818 2.9818 -1.7215 -232.98 2568.2)"/>
        <Path id="path3689" style={{fill:"#ff0040"}} d="m481.56 421.56a95.844 95.844 0 0 1 -3.2658 24.806l-92.578-24.806z" transform="matrix(-.89114 -3.3258 3.3258 -.89114 -698.28 2350.8)"/>
      </g>
    </StyledSvg>
  )
}

export default SvgTest