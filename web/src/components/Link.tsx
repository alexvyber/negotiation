/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link"

const CustomLink = ({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  if (isInternalLink) {
    return <Link href={href} {...rest}></Link>
  }

  if (isAnchorLink) {
    return <Link href={href} {...rest} />
  }

  return <Link target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
