import React from 'react'
import { ProgressBar } from '../ProgressBar'
import { Style } from './Style'

export const ProgressMeter = ({startDate, endDate, progress = 30}) => {
  return (
    <Style>
        <ProgressBar progress={progress} />
        <span className="start-date">{startDate}</span>
        <span className="end-date">{endDate}</span>
    </Style>
  )
}
