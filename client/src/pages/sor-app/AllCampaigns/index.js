import React, { useMemo } from 'react'
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader'
import { getAllCampaigns } from './actions';
import { StyledAllCampaigns } from './Style'

export const AllCampaigns = withActionPageLoader(getAllCampaigns, ({loadedPageData}) => {

    const allCampaigns = useMemo(() => {
    
        let toReturn = []
        loadedPageData.campaigns.forEach(row => {
    
          toReturn.push({ 
            ...row
          })
        });
    
        /*return loadedPageData.reportCases.map((row) => {
          let d = new Date(row.createdDate);
    
          return { 
            ...row,
            searchDate: d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate(),
            statusCode: (row.statusCode === "ONGOING" ? (d >= weekOld ? "NEW" : "ONGOING") : row.statusCode),
            myCase: row.handlerId ? row.handlerId.toString() === authIdString : false
          };
        });*/
    
        return toReturn
    
      }, [loadedPageData]);

  return (
    <StyledAllCampaigns>
        <h1>All campaigns</h1>
        
        {console.log(allCampaigns)}

          <table>
              <tr>
                <th>campaign name</th>
                <th>campaignDescription</th>
                <th>campaignType</th>
                <th>active</th>
                <th>invitationDelayInDays</th>
                <th>setInactiveAfterDays</th>
                <th>timeOfOperation_start</th>
                <th>timeOfOperation_end</th>
                <th>workOnWeekends</th>
                <th>username</th>
              </tr>

        {allCampaigns.map(campaign=>(

            <tr>
              <td>{campaign.campaignName}</td>
              <td>{campaign.campaignDescription}</td>
              <td>{campaign.campaignType}</td>
              <td>{String(campaign.active)}</td>
              <td>{campaign.invitationDelayInDays}</td>
              <td>{campaign.setInactiveAfterDays}</td>
              <td>{campaign.timeOfOperation_start}</td>
              <td>{campaign.timeOfOperation_end}</td>
              <td>{campaign.workOnWeekends}</td>
              <td>{campaign.username}</td>
            </tr>

            ))}

          </table>
    </StyledAllCampaigns>
  )
}
)