
import baytaqHome1 from '../../app/assets/imgs/portfolio-images/baytaq-home1.png'
import baytaqHome2 from '../../app/assets/imgs/portfolio-images/baytaq-home2.png'
import baytaqForm from '../../app/assets/imgs/portfolio-images/baytaq-form.png'
import baytaqLogin from '../../app/assets/imgs/portfolio-images/baytaq-login.png'
import sorappDashboard from '../../app/assets/imgs/portfolio-images/sorapp-dashboard.png'
import sorappDashboard2 from '../../app/assets/imgs/portfolio-images/sorapp-dashboard2.png'
import whistlawDashboard from '../../app/assets/imgs/portfolio-images/whistlaw-dashboard.png'
import whistlawDashboard2 from '../../app/assets/imgs/portfolio-images/whistlaw-dashboard2.png'
import whistlawDepartment from '../../app/assets/imgs/portfolio-images/whistlaw-department.png'
import whistlawLogin from '../../app/assets/imgs/portfolio-images/whistlaw-login.png'
import whistlawProfile from '../../app/assets/imgs/portfolio-images/whistlaw-profile.png'

import whistlawLogo from '../../app/assets/imgs/portfolio-images/whistlawLogo.png'
  

export const imgs = [baytaqForm,baytaqHome2,baytaqLogin,sorappDashboard, sorappDashboard2, whistlawDashboard]

export const projects = [{
    name: "Whistlaw",
    overview: ["$10 K - $15 K","9 - 12 WEEKS","B2B", "SAAS"],
    highlights: [["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building","Subscription/payment module"],
    ["Interactive tables with multiple filters", "Larger forms broken down into interactive Multi-step sections", "Notification system","Tracked history of changes"],
    ["Dropbox integration for file management","App emailing system","Admin portal","Client manager","Single login for multiple account types and their associated UI"]
  ],
    description: "Modern reporting whistleblowing system under EU Law",
    logo: 'whistLawLongLogo',
    imgs: [whistlawDashboard2, whistlawDepartment, whistlawLogin, whistlawProfile]
},{
    name: "Baytaq",
    overview: ["$10 K - $12 K","20 - 30 WEEKS","B2C", "Real estate"],
    highlights: [
      ["Complex approval system between property managers, landlords and tenants","Google maps interactive UI","Check in / out dates functionality","Interactive UI","Multiple User Landing Pages"],
      ["Automatic thumbnail generation","Private file uploads for CV documents and ID pictures.","Image gallery with different image sizes","Scheduling interviews via Calendly Api"],
      ["Different UI and permissions for each account type","Integrated payments via Stripe Api", "Integrated chat via Chat Engine Api"]
    ],
    

    description: "Long term rental, marketed globally managed locally",
    logo: "logo",
    imgs: [baytaqHome2,baytaqHome1,baytaqForm,baytaqLogin]
},
{
    name: "SOR SEO",
    overview: ["INTERNAL TOOL","2 - 2.5 YEARS","B2B", "SAAS"],
    highlights: [
      ["advanced automated tasks and scraping","sequencing and intelligent queuing system (human-mimicking)","systematic monitoring over time","templates and assisted message composer","operations analytics","select connection view (human validation)"]
  ],

    description: "Account-based platform, advanced automation queueing system",
    logo: "logo",
    imgs: [sorappDashboard,sorappDashboard2]
},
{
    name: "Packmart",
    overview: ["$10 K - $15 K","9 - 12 WEEKS","B2C", "E-Commerce", "Shopify API"],
    highlights: [
      ["custom React storefront on Shopify’s API","custom box builder module","3D box model in threeJS","animated rerendering of box","price and size automatically adjusted on user input"]
  ],

    description: "Modern reporting whistleblowing system under EU Law",
    logo: "logo",
    imgs: []
},
{
    name: "Changelog tool",
    overview: ["$10 K - $15 K","9 - 12 WEEKS","B2B", "SAAS"],
    highlights: [
      ["linear.app API integration","drag and drop sortable list functionality", "custom editor", "publisher, html renderer"]
  ],
    description: "Modern reporting whistleblowing system under EU Law",
    logo: "logo",
    imgs: []
},
{
    name: "Swift Finance",
    overview: ["$25 K - $30 K","50 - 60 WEEKS","B2B", "Automated actions", "Custom analytics"],
    highlights: [
      ["LinkedIn custom automations","Website UX revamp","Advanced analytics modules", "Industry: Finance software FP&A"]
  ],
    description: "Modern reporting whistleblowing system under EU Law",
    logo: "logo",
    imgs: []
},
]