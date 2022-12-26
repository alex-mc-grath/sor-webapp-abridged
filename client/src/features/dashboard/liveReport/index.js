import React from 'react'
import { Card, Style } from './Style'

export const LiveReport = () => {
  return (
    <Style>
        <Card active>
            <i className="fa-duotone fa-radar"></i>  
            <span className='action'>scanning</span>
            <span className='entity'>Blue Ruby Corp.</span>
        </Card>
        <Card>
        <i class="fa-duotone fa-share-from-square"></i>
            <span className='action'>inviting</span>
            <span className='entity'>Cameron Campaign</span>
        </Card>
        <Card>
            <i class="fa-duotone fa-messages"></i>  
            <span className='action'>messaging</span>
            <span className='entity'>Lana Del Ray Charles</span>
        </Card>
        <Card>
            <i class="fa-duotone fa-messages"></i>  
            <span className='action'>messaging</span>
            <span className='entity'>Lana Del Ray Charles</span>
        </Card>
    </Style>
  )
}
