
import baytaqHome1 from '../../app/assets/imgs/portfolio-images/baytaq-home1.png'
import baytaqHome2 from '../../app/assets/imgs/portfolio-images/baytaq-home2.png'
import baytaqForm from '../../app/assets/imgs/portfolio-images/baytaq-form.png'
import baytaqLogin from '../../app/assets/imgs/portfolio-images/baytaq-login.png'

import sorappDashboard from '../../app/assets/imgs/portfolio-images/sorapp-dashboard.png'
import sorappDashboard2 from '../../app/assets/imgs/portfolio-images/sorapp-dashboard2.png'
import sorapp1 from '../../app/assets/imgs/portfolio-images/sorapp1.png'
import sorapp2 from '../../app/assets/imgs/portfolio-images/sorapp2.png'
import sorapp3 from '../../app/assets/imgs/portfolio-images/sorapp3.png'
import sorapp4 from '../../app/assets/imgs/portfolio-images/sorapp4.png'
import whistlawDashboard from '../../app/assets/imgs/portfolio-images/whistlaw-dashboard.png'
import whistlawDashboard2 from '../../app/assets/imgs/portfolio-images/whistlaw-dashboard2.png'
import whistlawDepartment from '../../app/assets/imgs/portfolio-images/whistlaw-department.png'
import whistlawLogin from '../../app/assets/imgs/portfolio-images/whistlaw-login.png'
import whistlawProfile from '../../app/assets/imgs/portfolio-images/whistlaw-profile.png'
import packmart1 from "../../app/assets/imgs/portfolio-images/packmart1.png";
import packmart2 from "../../app/assets/imgs/portfolio-images/packmart2.png";
import packmart3 from "../../app/assets/imgs/portfolio-images/packmart3.png";
import packmart4 from "../../app/assets/imgs/portfolio-images/packmart4.png";
import changelogTool1 from "../../app/assets/imgs/portfolio-images/linear1.png";
import changelogTool2 from "../../app/assets/imgs/portfolio-images/linear2.png";
import swiftFinance2 from "../../app/assets/imgs/portfolio-images/swiftFinance3.png";


// logos
import whistlawLogo from '../../app/assets/imgs/portfolio-images/whistlawLogo.png'
import baytaqLogo from '../../app/assets/imgs/portfolio-images/baytaq-logo-mod.png'
import swiftLogo from "../../app/assets/imgs/portfolio-images/swift-logo.png";
import packmartLogo from "../../app/assets/imgs/portfolio-images/packmart-logo.png";
import sorseoLogo from "../../app/assets/imgs/portfolio-images/sorseo-logo.png";
  




export const imgs = [baytaqForm,baytaqHome2,baytaqLogin,sorappDashboard, sorappDashboard2, whistlawDashboard]

export const projects = [{
    name: "Whistlaw",
    overview: ["$10 K - $15 K","15 - 20 WEEKS","B2B", "SAAS", "LEGAL TECH", "STRIPE API"],
    highlights: [["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building","Dropbox integration for file management", "Notification system","Tracked history of changes"],
    ["Subscription/payment module","Interactive tables with multiple filters", "Larger forms broken down into interactive Multi-step sections", "App emailing system", "Admin portal and client manager","Single login for multiple account types and their associated UI"],
  ],
  //   highlights: [["Modern looking dashboard","File upload with access restrictions","Downloadable Dashboard (PDF and CSV)","Custom charts building"],
  //   ["Subscription/payment module","Interactive tables with multiple filters", "Larger forms broken down into interactive Multi-step sections", "App emailing system"],
  //   ["Dropbox integration for file management", "Notification system","Tracked history of changes"],
  //    ["Admin portal and client manager","Single login for multiple account types and their associated UI"]
  // ],
    description: "Modern reporting whistleblowing system under EU Law",
    logo: whistlawLogo,
    imgs: [whistlawDashboard2, whistlawDepartment, whistlawLogin, whistlawProfile],
    color: "#418EEB"
},{
    name: "Baytaq",
    overview: ["$10 K - $12 K","20 - 30 WEEKS","B2C", "REAL ESTATE"],
    highlights: [
      ["Complex approval system between property managers, landlords and tenants","Google maps interactive UI","Check in / out dates functionality","Interactive UI","Multiple User Landing Pages", "Integrated chat via Chat Engine Api"],
      ["Automatic thumbnail generation","Private file uploads for CV documents and ID pictures.","Image gallery with different image sizes","Scheduling interviews via Calendly Api", "Different UI and permissions for each account type","Integrated payments via Stripe Api"],
    ],
    

    description: "Long term rental, marketed globally managed locally",
    logo: baytaqLogo,
    imgs: [baytaqHome2,baytaqHome1,baytaqForm,baytaqLogin],
    color: "#333333"
},
{
    name: "SOR SEO",
    overview: ["INTERNAL TOOL","2 - 2.5 YEARS","B2B", "SAAS", "AUTOMATED ACTIONS"],
    highlights: [
      ["Advanced automated tasks and scraping","Sequencing and intelligent queuing system (human-mimicking)","Systematic monitoring over time"],
      ["Templates and assisted message composer","Operations analytics","Select connection view (manual validation)"]
  ],

    description: "Account-based platform, advanced automation queueing system amd insights",
    logo: sorseoLogo,
    imgs: [sorappDashboard, sorappDashboard2, sorapp3, sorapp4
      // sorapp4
    ],
    color: "#08a2e5"
},
{
    name: "Packmart",
    overview: ["$1 K - $2 K","4 - 6 WEEKS","B2C", "E-COMMERCE", "SHOPIFY API"],
    highlights: [
      ["Custom React storefront on Shopify’s API","Custom box builder module","3D box model in threeJS","Animated rerendering of box","Price and size automatically adjusted on user input"]
  ],

    description: "Custom 3D module to design and build your own box - built on top of a Shopify e-commerce",
    logo: packmartLogo,
    imgs: [packmart1, packmart2, packmart4, packmart3],
    color: "#27BCB6"
},
{
    name: "Changelog tool",
    overview: ["$2 K - $3 K","6 - 8 WEEKS","B2B", "API INTEGRATION"],
    highlights: [
      ["Linear.app API integration","Drag and drop sortable list functionality", "Custom editor", "Publisher, Html renderer"]
  ],
    description: "Web application to create custom changelogs based on linear.app issues",
    logo: null,
    imgs: [changelogTool1,changelogTool2],
    color: "#2A2C6C"
},
{
    name: "Swift Finance",
    overview: ["$25 K - $30 K","50 - 60 WEEKS","B2B", "AUTOMATED ACTIONS", "CUSTOM ANALYTICS"],
    highlights: [
      ["LinkedIn custom automations","Website UX revamp","Advanced analytics modules", "Industry: Finance software FP&A"]
  ],
    description: "UX/UI Website redesign, custom analytics, automated actions",
    logo: swiftLogo,
    imgs: [swiftFinance2],
    color: "#F47920"
},
]