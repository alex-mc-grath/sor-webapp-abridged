  import { useState, useEffect, useRef } from 'react';
  import { SingleDatePicker } from 'react-dates';
  import { BaseStyle } from '../BaseStyle';
  import moment from 'moment';
  import styled, { css } from 'styled-components/macro';

  const CustomStyle = styled(BaseStyle)`
  
    .DayPicker {
      border-radius: 20px;
    }

    .DateInput {
      display: none;
    }
    .DateInput,
    .DateRangePickerInput_arrow {
      display: none;
    }

    .DateRangePicker_picker {
      /*position: absolute;
      top: 4rem !important;
      left: -35rem !important;*/

      position: absolute;
      top: calc(100% + 1rem);
    }

    .CalendarMonthGrid {
      > div:nth-child(2) {
        border-right: none;
      }
    }
  `;

  const StyledDefaultRenderElement = styled.div`
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
    display: flex;
    justify-content: space-between;
    height: 4.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items:center;

    .date-once-picked {
      font-weight: bold;
      margin: 0 0.5rem;
      display: flex;
      justify-content: space-between;



      i {
        margin-left: 0.5rem;
        margin-right: 0 !important;
      }
    }

    ${(props) =>
      props.type === 'switched' &&
      css`
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        max-width: 180px;
        height: 5rem;
        justify-content: space-between;
        align-items: center;
        margin-top: 0;

        svg {
        }

        .fa-light.fa-calendar {
          margin: 0;
          color: ${(props) => props.theme.colors.primary};
        }

        span {
          margin-left: 1rem;
          margin-right: 3rem;
          font-weight: bold;
        }
        i.far.fa-chevron-down {
          color: #d3d6e4;
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      `}

    .calendarComponent {
      position: absolute;
      width: fit-content;
      top: calc(100% + 1rem);
      z-index: 2;
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
            return `left: 50% !important; transform: translateX(-50%) !important;`
          }
        }
      }
    }

    .fa-light {
      margin:auto;
      margin-left: auto;
      margin-right:0.25rem;
      font-size: 1.5rem;
      color: #adadad;

    }


    > * {
      cursor: pointer;
    }

    .DateRangePicker {
      position: relative;
      display: flex;
      flex-direction: row;
    }

    .DateRangePicker_picker__directionLeft {
      right: 100% !important;
      background: #f4f5f9;
      border-radius: 12px;
    }

    .buttonContainer {
      width: max-content;
      display: flex;
      padding: 0rem 1.2rem;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #f4f5f9;
      border-radius: 12px;

      svg,
      i {
        margin: 0.2rem 1.6rem;
      }

      /*svg.DateRangePickerInput_arrow_svg {
        display: none;
      }*/

      i {
        color: #d3d6e4;

        &.fa-calendar {
          color: #418eeb;
          font-size: 2.5rem;
        }
      }

      .text-box {
        display: flex;
        flex-direction: column;
        padding: 0.8rem 0;
        width: 100%;

        span {
          &.date-range {
            font-weight: 500;
            font-size: 1.5rem;
          }
          &.dateSpan {
            width: 100%;
            min-width: 70px;
            display: block;
            width: 100%;
            font-size: 1.2rem;
            white-space: nowrap;

            &:nth-of-type(2) {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }

    .DateRangePickerInput {
      display: flex;
      align-items: center;
      border: none;

      .DateInput {
        background: transparent;
        width: fit-content;
        max-width: 70px;

        .DateInput_input {
          padding: 0rem !important;
        }

        .DateInput_input__focused {
          border: none;
        }

        input {
          font-size: 1.23rem;
          background: transparent;
          width: fit-content;
        }
      }
    }

    .DateRangePickerInput_arrow_1 {
      margin-right: 1rem;
    }

    .DayPickerNavigation_button__default {
      border: none;
    }

    .DayPicker__withBorder {
      border-radius: 23px;
    }

    .CalendarDay__default {
      border: none;
    }

    button.DayPickerKeyboardShortcuts_buttonReset {
      display: none;
    }

    .CalendarDay__selected {
      background: ${(props) => props.theme.colors.primary} !important;
      border-radius: 50%;
    }

    .CalendarDay__selected_span {
      background: #e2f0ff !important;
      border: none !important;
    }

    /* // NOTE: the order of these styles DO matter */

    /* // Will edit everything selected including everything between a range of dates */
    .CalendarDay__selected_span {
      background: #82e0aa;
      color: black;
      border: 1px solid pink;
    }

    /* // Will edit selected date or the endpoints of a range of dates */
    .CalendarDay__selected {
      position: relative;
      background: #ddecff;
      color: white;

      /* 
      &:before {
        position: absolute;
        top: 0;
        right: -50%;
        content: '';
        width: 100%;
        height: 100%;
        background: #ddecff;
        z-index: -1;
      } */
    }

    /* // Will edit when hovered over. _span style also has this property */
    .CalendarDay__selected:hover {
      background: ${(props) => props.theme.colors.primary} !important;
      color: white;
    }

    /* // Will edit when the second date (end date) in a range of dates
  // is not yet selected. Edits the dates between your mouse and said date */
    /*.CalendarDay__hovered_span:hover,*/
    .CalendarDay__hovered_span {
      background: ${(props) => props.theme.colors.primary} !important;
      color: white;
    }

    .dateSpan:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `;

  const DefaultRenderElement = ({ date, calendarComponent, openCalendar, focused, type = 'default', align=null }) => {
    return (
      <StyledDefaultRenderElement type={type} onClick={openCalendar} align={align}>
        {type === 'switched' &&
          (date ? (
            <div className="date-once-picked">
              {date.format('D MMM Y')} <i className="far fa-chevron-down"></i>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <span>Today</span>
              <i className="far fa-chevron-down"></i>
            </div>
          ))}{' '}
        {type === 'default' && (date ? date.format('D MMM Y') : <>Select date</>)}&nbsp;<i className="fa-light fa-calendar"></i>
        <div className="calendarComponent">{calendarComponent}</div>
      </StyledDefaultRenderElement>
    );
  };

  export const DatePicker = ({ uniqueId = 'datePicker_' + Math.random(), date = null, RenderComponent = DefaultRenderElement, onDateChanged = null, type, align=null }) => {
    const [selectedDate, setSelectedDate] = useState(date ? moment(date) : null);
    const [focused, setFocused] = useState(false);
    const allowDrop = useRef(true)

    const onDateChange = (newDate) => {
      setSelectedDate(newDate);

      if (onDateChanged) {
        onDateChanged(newDate.toDate());
      }
    };

    const onFocusChange = (value) => {
      allowDrop.current = false;
      setFocused(value.focused)
      setTimeout(() => {allowDrop.current = true}, 300)
    }

    const openCalendar = () => {
      setFocused(state => {
        if(!state && allowDrop.current)
        {
          return true;
        }
        else
        {
          return false;
        }
      })
    }

    return (
      <RenderComponent
        date={selectedDate}
        openCalendar={openCalendar}
        focused={focused}
        type={type}
        align={align}
        calendarComponent={
          <CustomStyle>
            <SingleDatePicker
              date={selectedDate || moment()} // momentPropTypes.momentObj or null
              onDateChange={onDateChange} // PropTypes.func.isRequired
              focused={focused} // PropTypes.bool
              onFocusChange={onFocusChange} // PropTypes.func.isRequired
              id={uniqueId} // PropTypes.string.isRequired,
              small={true}
              numberOfMonths={1}
              keepOpenOnDateSelect={false}
              keepFocusOnInput={false}
              isOutsideRange={() => false}
            />
          </CustomStyle>
        }
      />
    );
  };
