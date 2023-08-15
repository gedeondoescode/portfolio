type JobProps = {
  thumbnail?: string
  href: string
  company: string
  yearFrom: number
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
    href: "https://wevise.org",
    company: "Wevise",
    yearFrom: 2023,
    yearTo: "Current",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla."
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