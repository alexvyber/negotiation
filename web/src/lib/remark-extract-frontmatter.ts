import { visit } from "unist-util-visit"
import { load } from "js-yaml"

export default function extractFrontmatter() {
  return (tree: any, file: { data: { frontmatter: unknown } }) => {
    visit(tree, "yaml", (node, index, parent) => {
      file.data.frontmatter = load(node.value)
    })
  }
}
