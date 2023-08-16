type JobProps = {
  thumbnail?: string
  href: string
  company: string
  yearFrom: number | string
  yearTo?: number | string
  desc?: string 
}

type SocialProps = {
  icon: string
  link: string
  name?: string
}

export const JobInfo: JobProps[] = [
  {
    thumbnail: "../public/Pipeline.png",
    href: "https://buildpipeline.ai",
    company: "Pipeline",
    yearFrom: "August 2023",
    yearTo: "Current",
    desc: "Pipeline AI focuses on creating the perfect AI tool to gather leads, write cold emails, and manage and run campaigns for businesses looking for a cheaper alternative. Currently, my primary duty is to build and update some of the UI components and pages for our MVP set to be released for August 2023."
  },
  {
    thumbnail: "../public/wevise.jpg",
    href: "https://wevise.org",
    company: "Wevise",
    yearFrom: "February 2023",
    yearTo: "Current",
    desc: "Wevise is a nonprofit with a mission to make a career in tech possible by providing free mentorship from industry professionals. Throughout the initial development stages, I focused on configuring our design style and creating many of the pages and components that make up what Wevise is now."
  },
  {
    thumbnail: "../public/School Simplified.png",
    href: "https://schoolsimplified.org",
    company: "School Simplified",
    yearFrom: "April 2022",
    yearTo: "March 2023",
    desc: "School Simplified was a student-run digital nonprofit based in the US, which consisted at the time of over 60,000 members in their community. During my time there, I primarily volunteered as a frontend developer, building and updating beautiful pages for students to gain access to resources they need."
  }
]

export const SocialInfo: SocialProps[] = [
  {
    icon: "bxl-instagram",
    link: "https://instagram.com/gedeonartiste"
  },
  {
    icon: "bxl-linkedin",
    link: "https://linkedin.com/in/gsainrival"
  },
  {
    icon: "bxl-github",
    link: "https://github.com/gedeondoescode"
  },
]