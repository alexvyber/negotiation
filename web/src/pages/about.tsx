import { MDXLayoutRenderer } from "@components/MDXComponents"
import { getFileBySlug } from "@/lib/mdx"

const DEFAULT_LAYOUT = "AuthorLayout"

export async function getStaticProps() {
  const authorDetails = await getFileBySlug("authors", ["default"])
  return { props: { authorDetails } }
}

type Props = any
export default function About({ authorDetails }: Props) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
