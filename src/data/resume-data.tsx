import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Noor Alseginy",
  initials: "NA",
  location: "Princeton, NJ, USA",
  locationLink: "https://www.google.com/maps/place/NewJersey",
  about:
    "Problem-solver focused on building data-driven solutions to mitigate risk across businesses and communities",
  summary:
    "NYU Stern alum with a robust background in M&A and IPO datasets at Bloomberg, complemented by nuanced insights in emerging real estate markets. Now at Bank of America, I'm steering risk analysis with precision and enhancing risk management strategies. With a blend of analytical acumen and proven leadership capabilities, I'm dedicated to driving financial excellence and advancing decision-making in the industry.",
  avatarUrl: "https://avatars.githubusercontent.com/u/74329559?v=4",
  personalWebsiteUrl: "https://alseginy.com",
  contact: {
    email: "noor@alseginy.com",
    tel: "+19292406844",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nooralseginy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nooralseginy/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nooralseginy",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "New York University - Leonard N. Stern School of Business",
      degree: "Bachelor's Degree in Finance, Concentrations in Data Analytics & Management Organizations",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Bank of America",
      link: "https://about.bankofamerica.com/en",
      badges: ["Pennington, NJ"],
      title: "Senior Data Analyst - Global Risk Management",
      logo: ParabolLogo,
      start: "2022",
      end: "Current",
      description:
        "Mitigating risk at an enterprise-level through reporting automations, risk metric development, and strategic funding alignments",
    },
    {
      company: "Bloomberg LP",
      link: "https://bloomberg.com",
      badges: ["Princeton, NJ"],
      title: "Data Analyst, M&A / Equity Capital Markets",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Developed technical solutions for MA <GO>, IPO <GO>, SPAC <GO>, & CACS <GO> users with a focus on data processing automations and data quality rules",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Tableau",
    "PowerBI",
    "Microsoft Office",
    "Alteryx",
    "Bloomberg Terminal",
  ],
  projects: [
    {
      title: "ONE Investments",
      techStack: [
        "Internship",
        "PowerQuery",
        "SQL",
        "Tableau",
        "Salesforce CRM",
      ],
      description: "Data Analysis & Strategic Positioning",
      logo: ConsultlyLogo,
      link: {
        label: "oneinvestments.com",
        href: "https://oneinvestments.com/",
      },
    },
  ],
} as const;
