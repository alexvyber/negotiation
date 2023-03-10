import { getAllFilesFrontMatter } from "@/lib/mdx"
import { siteMetadata } from "@/data/siteData/siteMetadata"
import ListLayout from "@/layouts/ListLayout"
import { PageSEO } from "@components/SEO"

export const POSTS_PER_PAGE = 15

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

type Props = any

export default function Blog({ posts, initialDisplayPosts, pagination }: Props) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
