import { ReactComponent as Dashboard } from "../images/icons/dashboard.svg";
import { ReactComponent as FindJob } from "../images/icons/work.svg";
import { ReactComponent as SavedJobs } from "../images/icons/save.svg";
import { ReactComponent as Practice } from "../images/icons/test.svg";
import { ReactComponent as News } from "../images/icons/news.svg";
import { ReactComponent as NeedHelp } from "../images/icons/help.svg";
import { ReactComponent as Contact } from "../images/icons/contact.svg";
import { ReactComponent as Settings } from "../images/icons/settings.svg";
import { theme } from "../Theme";

export const areas = [
  { area: "Ameerpet, Hyderabad, Telangana", AQI:"535" },
  { area: "Begumpet, Hyderabad, Telangana", AQI:"570" },
  { area: "East Marredpally, Hyderabad, Telangana", AQI:"678" },
  { area: "Pleasant Park, Mumbai, Maharashtra", AQI:"768" },
  { area: "Mira gaon, Mumbai, Maharashtra", AQI:"876" },
];
export const sideItems = [
  { text: "Dashboard", icon: Dashboard , color: theme.palette.black?.one},
  { text: "Find Jobs", icon: FindJob , color: theme.palette.black?.two},
  { text: "Saved Jobs", icon: SavedJobs , color: theme.palette.black?.two },
  { text: "Practice Tests", icon: Practice , color: theme.palette.black?.three },
  { text: "News & Events", icon: News , color: theme.palette.black?.three },
];

export const extraSide = [
  { text: "Need Help ?", icon: NeedHelp , color: theme.palette.black?.three },
  { text: "Contact Us", icon: Contact , color: theme.palette.black?.three },
  { text: "Settings", icon: Settings , color: theme.palette.black?.three },
];


export const cities = [
  { area: "Hyderabad", AQI:"678" },
  { area: "Mumbai", AQI:"780" },
  { area: "Banglore", AQI:"750" },
];

export const jobSkills = [
  {area : "UI/UX Designer"},
  {area : "Graphic Designer"},
  {area : "Full Stack Developer"},
  {area : "Product Designer"},
  {area : "Web Developer"},
]



export const sidepageheading = ["Find Jobs", "Saved Jobs"]
export const inputbasehead = ["Where do  you stay ?", "Where do you want to work?", "What do you want to do?"];
export const steps = ["Your Location", "Job Location", "Your Skills"];
export const landuitext = ["Enter Location to know Time Air Quality Index (AQI)","Real Time Air Quality Index(AQI) in this location"];
export const distance = ["Distance","0 - 10 Kms", "11 - 20 Kms", "21 - 30 Kms","31 - 40 Kms"]; 
export const datePosted = ["Date Posted","Past 24 hours", "Past week", "Past month","Anytime"]; 
export const jobType = ["Job Type","Full time", "Internship", "Contract","Remote"]; 
export const experienceLevel = ["Experience Level","Fresher", "Mid - level", "Director","Executive"]; 
export const transport = ["Transport","Metro", "Bus", "Car pooling","Motor Cycle"]; 

export const cabDetails = ["100","25 Kms","1 hr 20 mins"]
export const title = ["Description","About the Company"]
export const description = ["Open Text is seeking a talented,personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."]
export const company = ["High level of proficiency with leading UX Design software packages,such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products."]
export const skills=["Excellent written and oral communication and presentation skills  "]
export const metro=["Catch a blue line metro towards Raidurg"]


export const PageHeading1 = ["Recommended for you","Job list"]
export const PageHeading2 = ["Based on your profile, skills and search history.","Based on your search"]
export const searchJobskills=["User Experience Designer", "Full Stack Developer"]
export const searchJobLocation=["Hyderabad", "Mumbai","Bangalore"]
export const greenCommuteRoutes=['Green Commute Routes']
export const google=['View in Google Maps']
export const placeholder=['Search Skills','Location']
export const fileUpload=['File Upload']

export const userId = "2";
localStorage.setItem("userId",userId);

export const baseURLForDb = "http://3.143.224.91:9191";
