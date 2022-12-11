import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components/macro';
import TimeKeeper from 'react-timekeeper';
import { MainButton } from '../MainButton';

const StyledDefaultRenderElement = styled.div`
display:flex;
align-items:center;
position: relative;
background: rgb(243, 244, 246);
border-radius: 9px;
padding: 0.5rem 1rem;
cursor: pointer;
margin-top: 0.4rem;
width: 100%;
font-size: 1.3rem;
color: #484848;
/* padding: 0.5rem 0.8rem; */
height: 4.5rem;
    padding-left: 1rem;
    padding-right: 1rem;

.dropdown-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.timePickerComponent{
  .react-timekeeper{
  

  .react-timekeeper__top-bar{
    display: flex;
    justify-content: center;
    align-items: center;

    span{
    color:${props=>props.theme.colors.primary};
  }

    button{
      /* display:none; */
      font-size: 1.2rem;
      position:absolute;
      right: 5px;

      ::after {
        background:black;
  display:block;
  content: '';
  border-bottom: solid 3px #019fb6;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}


      &:hover{
        color:${props=>props.theme.colors.primary};
        transition: 0.3s all ease-in-out;

        &::after { transform: scaleX(1);
         }

      }
    }
  }

  .react-timekeeper__clock-wrapper{

    background: #fafafa;
    padding-bottom:1.3rem;
    padding:0;
  }

  .react-timekeeper__tb-minute-wrapper{
    width:auto;
    margin-left:0;
    
  }

  .react-timekeeper__clock-hand{
    stroke:${props=>props.theme.colors.primary};
    opacity: 0.6;
  }

  .react-timekeeper__hand-circle-center{
    fill:${props=>props.theme.colors.primary};
  }

  .react-timekeeper__hand-circle-outer{
    fill:${props=>props.theme.colors.primary};
    opacity: 0.6;
  }

  .react-timekeeper__hand-intermediate-circle{
    fill:${props=>props.theme.colors.primary};
    opacity: 0.6;
  }

  .react-timekeeper__meridiem-toggle{
    display:none;
  }
}


}
 
`;


const StyledTimePicker = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  ${({align}) => {
      if(align === "left")
      {
        return `left: 0rem;`
      }
      else if(align === "right")
      {
        return `right: 0rem;`
      }
      else
      {
        return `left: 50%; transform: translateX(-50%);`
      }
    }
  }
  z-index: 2;

  .closeHolder {
    position:absolute;
    top:1.2rem;
    left:0.9rem;

    display: flex;
    justify-content: flex-end;
    background: rgb(250,250,250);

    .closeButton {
      background: #ddd;
      padding: 0.5rem .8rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #ccc;
      }
    }
  }
  
`


const DefaultRenderElement = ({ time, elementRef, timePickerComponent, toggleTimePicker, focused, type = 'default' }) => {

  return (
    <StyledDefaultRenderElement type={type} ref={elementRef}>
      <div className="dropdown-header" onClick={toggleTimePicker}>
        {type === 'switched' &&
          (time ? (
            <div className="date-once-picked">
              {time} <i className="far fa-chevron-down"></i>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <span>Today</span>
              <i className="far fa-chevron-down"></i>
            </div>
          ))}{' '}
        {type === 'default' && (time ? time : <>Select time</>)}&nbsp;<i className="fa-light fa-clock"></i>
      </div>
      {focused && <div className="timePickerComponent">{timePickerComponent}</div>}
    </StyledDefaultRenderElement>
  );
};

export const TimePicker = ({ time = null, RenderComponent = DefaultRenderElement, onTimeChanged = null, type, align = null }) => {

  const [currentTime, setCurrentTime] = useState(time || null)
  const [focused, setFocused] = useState(false);

  const openTimer = useState(false);
  const timeDropdownRef = useRef()
  const timerHeaderRef = useRef()


  const onTimeChange = (newTime) => {
    let t = newTime.formatted12;
    setCurrentTime(t)
    if (onTimeChanged) {
      onTimeChanged(t);
    }
  }

  const toggleTimePicker = () => {
    setFocused(state => {
      return !state
    })
  }

  useEffect(() => {
    const onScreenClick = (e) => {

      if(timeDropdownRef.current)
      {
        let timerbounds = timeDropdownRef.current.getBoundingClientRect()

        if(e.pageX >= timerbounds.x && e.pageX <= timerbounds.x+timerbounds.width && e.pageY >= timerbounds.y && e.pageY <= timerbounds.y+timerbounds.height)
        {
          //do nothing
        }
        else
        {
          let headerbounds = timerHeaderRef.current.getBoundingClientRect()

          if(e.pageX >= headerbounds.x && e.pageX <= headerbounds.x+headerbounds.width && e.pageY >= headerbounds.y && e.pageY <= headerbounds.y+headerbounds.height)
          {
            //do nothing
          }
          else
          {
            setFocused(false)
          }
        }
      }
    }

    window.addEventListener('click', onScreenClick);

    return () => {
      window.removeEventListener('click', onScreenClick);
    };
  }, [])


  return (
      <RenderComponent
        elementRef={timerHeaderRef}
        time={currentTime}
        focused={focused}
        type={type}
        toggleTimePicker={toggleTimePicker}
        timePickerComponent={
          <StyledTimePicker ref={timeDropdownRef} align={align}>
            <TimeKeeper time={currentTime} onChange={onTimeChange} switchToMinuteOnHourSelect />
            <div className='closeHolder'><button className='closeButton' onClick={toggleTimePicker}>X</button></div>
            {/* <TimeKeeper time={currentTime} onChange={onTimeChange}/> */}
          </StyledTimePicker>
        }
      />
  );
};
