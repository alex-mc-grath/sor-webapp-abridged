import api from "../../../../utils/api"
import store from "../../../../store"

export const getListOfCases = async () => {
    try
    {
        const {data} = await api.get('/report-cases')

        let reportCases = data.reportCases;
        let count = 0;
        console.log("data.reportCases.length", data.reportCases.length)
        reportCases.forEach(report => {
            if(report.handler === null && report.statusCode === "ONGOING")
            {
                count++
            }
        });
        store.dispatch({ type: 'OPENED_CASES', payload:{openedReportCases: count} })
        return data
    }
    catch(err)
    {
        store.dispatch({ type: 'OPENED_CASES', openedReportCases: -1 })
        console.log(err)
        return []
    }
}