import { useState, useEffect, useRef } from 'react';
import { DateRangePicker as ReactDatesRangePicker } from 'react-dates';
import { BaseStyle } from '../BaseStyle';
import moment from 'moment';
import styled from 'styled-components';
import { Row } from '../../../layout/Row';

const CustomStyle = styled(BaseStyle)`
  .DateInput,
  .DateRangePickerInput_arrow {
    display: none;
  }

  .DateRangePicker_picker {
    position: absolute;
    top: 4rem !important;
    left: -35rem !important;
  }
`;

const StyledDefaultRenderElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  /* background: #f4f5f9; */
  border-radius: 12px;
  left: 0;

  > * {
    cursor: pointer;
  }

  .DateRangePicker {
    position: relative;
    display: flex;
    flex-direction: row;

    .DayPicker{
      &::before{
        content:'';
        position:absolute;
        width:1px;
        height:100%;
        background: #D6D6D6;
        opacity: 0.5;
        left:50%;
        transform: translateX(-50%);
        z-index:2;
      }
    }
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

const DefaultRenderElement = ({ startDate = null, endDate = null, calendarComponent, focusStart, focusEnd, focused }) => {
  const onEndDateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    focusEnd();
  };

  return (
    <StyledDefaultRenderElement onClick={focusStart}>
      <div className="buttonContainer">
        {calendarComponent}
        <i class="fa-light fa-calendar"></i>

        <div className="text-box">
          <span className="date-range">Date Range</span>
          <Row align="center" margin="0">
            <span className="dateSpan">{startDate ? startDate.format('D MMM Y') : 'start'}</span>
            &nbsp;-&nbsp;
            <span className="dateSpan" onClick={onEndDateClick}>
              {endDate ? endDate.format('D MMM Y') : 'end'}
            </span>
          </Row>
        </div>

        <i className="fa-solid fa-angle-down"></i>
      </div>
    </StyledDefaultRenderElement>
  );
};

export const DateRangePicker = ({ uniqueId = 'dateRangePicker_' + Math.random(), defaultStartDate = null, defaultEndDate, RenderComponent = DefaultRenderElement, onDateIntervalChange = null }) => {
  const [dateRange, setDateRange] = useState({ startDate: defaultStartDate === null ? moment() : moment(defaultStartDate), endDate: defaultEndDate === null ? moment() : moment(defaultEndDate) });
  const [focusedInput, setFocusedInput] = useState(null);
  const lastState = useRef(null)
  const allowDrop = useRef(true)

  const onStartOrEndChanged = (value) => {
    setFocusedInput(state => {

      if(state === null && (lastState.current !== value || allowDrop.current))
      {
        lastState.current = value
        return value;
      }
      else if(state !== null)
      {
        lastState.current = value
        return value;
      }
      else
      {
        lastState.current = null
        return null
      }
    });
  };

  const onFocusChanged = (value) => {
    if(value === null)
    {
      allowDrop.current = false;
      setFocusedInput(value)
      setTimeout(() => {allowDrop.current = true}, 300)
    }
    else
    {
      setFocusedInput(value)
    }
  }

  const onDatesChange = (dates) => {
    setDateRange(dates);

    if (focusedInput === 'endDate' || focusedInput == null) {
      if (onDateIntervalChange) {
        onDateIntervalChange(dates);
      }
    }
  };

  return (
    <>
      <RenderComponent
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        focusStart={() => onStartOrEndChanged('startDate')}
        focusEnd={() => onStartOrEndChanged('endDate')}
        focused={focusedInput !== null}
        calendarComponent={
          <CustomStyle>
            <ReactDatesRangePicker
              startDate={dateRange.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={dateRange.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={onDatesChange}
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={onFocusChanged}
              isOutsideRange={() => false}
              minimumNights={0}
              displayFormat={() => 'D MMM Y'}
              customArrowIcon={'-'}
            />
          </CustomStyle>
        }
      />

      <CustomStyle></CustomStyle>
    </>
  );
};
