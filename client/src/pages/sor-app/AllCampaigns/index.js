import React, { useMemo } from 'react'
import withActionPageLoader from '../../../_boilerplate/hoc/withActionPageLoader'
import { getAllCampaigns } from './actions';
import { StyledAllCampaigns } from './Style'

export const AllCampaigns = withActionPageLoader(getAllCampaigns, ({loadedPageData}) => {

    const allCampaigns = useMemo(() => {

        // let weekOld = new Date();
        // weekOld = new Date(weekOld.setDate(weekOld.getDate() - 7));
    
        // let accessMap = {}
        // loadedPageData.caseHandlers.forEach(row => {
        //   accessMap[row.reportCaseId.toString()] = true
        // });
    
        let toReturn = []
        loadedPageData.campaigns.forEach(row => {
        //   let d = new Date(row.createdDate);
    
          toReturn.push({ 
            ...row,
            // searchDate: d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate(),
            // statusCode: (row.statusCode === "ONGOING" ? (d >= weekOld ? "NEW" : "ONGOING") : row.statusCode),
            // myCase
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
        {loadedPageData}
        {console.log(loadedPageData)}
    </StyledAllCampaigns>
  )
}
)