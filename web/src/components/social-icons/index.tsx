// import Mail from "./mail.svg"
// import Github from "./github.svg"
// import Facebook from "./facebook.svg"
// import Youtube from "./youtube.svg"
// import Linkedin from "./linkedin.svg"
// import Twitter from "./twitter.svg"

import Link from "next/link"

// Icons taken from: https://simpleicons.org/

import { EnvelopeIcon } from "@heroicons/react/20/solid"
import { Facebook, Github, Twitter, Linkedin, Youtube } from "@icons-pack/react-simple-icons"

const components = {
  mail: EnvelopeIcon,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
} as const

type Props = {
  kind: keyof typeof components
  href: string
  size?: number | string
}

const SocialIcon = ({ kind, href, size = 8 }: Props) => {
  if (!href || (kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <Link
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </Link>
  )
}

export default SocialIcon
