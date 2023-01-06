import { AnimatePresence, motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Dashboard } from "../../../features/dashboard/index"
import { Home } from "../../../features/home/sor-seo"
import { Animation } from "../../../_boilerplate/layouts/Animation"


export const HomePage = () => {

  // Page SEO
  <Helmet>
    <title>SOR SEO | Account-based Experience</title>
    <meta name='description' content='A modern organic growth approach for b2b' />
  </Helmet>

  return <Animation><Home /></Animation>
}
