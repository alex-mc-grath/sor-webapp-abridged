import React from 'react'
import { QuickMetricsIconsDashboard } from './QuickMetricsIconsDashboard'
import { Style } from './Style'

export const EngineHealth = () => {
  return (
    <Style>
      <QuickMetricsIconsDashboard />
      {/* <center><p>There's currently not enough validated connections.</p></center> */}

      {/* Notify when down
Notify when stalled more than supposed to
Notify when weekly objective has been missed */}

        {/* <p>are there critical alerts (no invitation sent, connection rate absolute drop, etc.)</p>
        <p>what’s the progress for this "work segment", how many left? When do we need to “renew” with a new list</p>
        <p></p>
        <p></p> */}
    </Style>
  )
}

