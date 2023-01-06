
// but you can also within the dashboard toggle a dropdown and change campaign
// so it starts at Page level, where only the <Dashboard /> (feature) is rendered
// <Dashboard /> (feature) is coded to receive data, independantly of the app, because it's a feature (reuseability)
// Therefore, it's maybe not in Page that we set up the withActionPageLoader hoc

// PAGE-LEVEL-ONLY, no styling, no actions - What else usually goes into the page level? SEO? Loadable? Page Animation?

// should actions be at the level of features and not page? that could be nice :)


import { AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet"
import { Dashboard } from "../../../features/dashboard/index"

import { Layout } from "../../../features/dashboard/Style"
import withActionPageLoader from "../../../_boilerplate/hoc/withActionPageLoader"


// export const Dashboard = withActionPageLoader(getDashboardData,({loadedPageData}) => {

//   return <Dashboard data={loadedPageData} />

// })


export const DashboardPage = () => {

// Page SEO
<Helmet>
    <title>SOR SEO | Account-based Experience</title>
    <meta name='description' content='A modern organic growth approach for b2b' />
</Helmet>    

  return <Dashboard />

// Page animation
    // <motion.div variants={variants1} initial='enter' animate='center' exit='exit' transition={transition}>
        
    // </motion.div>
  
}


//   return (
//     <AnimatePresence>
//         <Dashboard />
//     </AnimatePresence>
//   )