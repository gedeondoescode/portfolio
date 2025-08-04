import WeviseLogo from '../assets/images/wevise.jpg'
import SSLogo from '../assets/images/School Simplified.png'

type JobProps = {
  thumbnail?: unknown
  href: string
  company: string
  yearFrom: number | string
  yearTo?: number | string
  desc?: string
}

type SocialProps = {
  icon: string
  link: string
}

export const JobInfo: JobProps[] = [
  {
    thumbnail: WeviseLogo,
    href: "https://wevise.org",
    company: "Wevise",
    yearFrom: "February 2023",
    yearTo: "October 2023",
    desc: "Wevise is a nonprofit with a mission to make a career in tech possible by providing free mentorship from industry professionals. Throughout the initial development stages, I focused on configuring our design style and creating many of the pages and components that make up what Wevise is now."
  },
  {
    thumbnail: SSLogo,
    href: "https://schoolsimplified.org",
    company: "School Simplified",
    yearFrom: "April 2022",
    yearTo: "March 2023",
    desc: "School Simplified was a student-run digital nonprofit based in the US, which consisted at the time of over 60,000 members in their community. During my time there, I primarily volunteered as a frontend developer, building and updating beautiful pages for students to gain access to resources they need."
  }
]

export const SocialInfo: SocialProps[] = [
  {
    icon: "instagram",
    link: "https://instagram.com/gedeonartiste"
  },
  {
    icon: "linkedin",
    link: "https://linkedin.com/in/gsainrival"
  },
  {
    icon: "github",
    link: "https://github.com/gedeondoescode"
  },
  {
    icon: "bluesky",
    link: "https://bsky.app/profile/gedeondoescode.com"
  },
]
