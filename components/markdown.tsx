import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface HastElement {
  type: "element"
  tagName: string
  properties: Record<string, string | string[]>
  children: HastNode[]
}

interface HastText {
  type: "text"
  value: string
}

type HastNode = HastElement | HastText

interface HastRoot {
  type: "root"
  children: HastNode[]
}

function getNodeText(node: HastNode): string {
  if (node.type === "text") return node.value
  if ("children" in node && Array.isArray(node.children)) {
    return node.children.map(getNodeText).join("")
  }
  return ""
}

function rehypeWrapCallout() {
  return (tree: HastRoot) => {
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i]
      if (node.type !== "element") continue
      if (node.tagName !== "h3") continue

      const headingText = getNodeText(node).trim().toLowerCase()
      if (headingText !== "try this" && !headingText.startsWith("suggestions")) continue

      // find end: next h2 or h3
      let end = tree.children.length
      for (let j = i + 1; j < tree.children.length; j++) {
        const n = tree.children[j]
        if (n.type === "element" && (n.tagName === "h2" || n.tagName === "h3")) {
          end = j
          break
        }
      }

      const wrapped: HastElement = {
        type: "element",
        tagName: "div",
        properties: { className: ["md-callout"] },
        children: tree.children.slice(i, end),
      }

      tree.children.splice(i, end - i, wrapped)
      break
    }
  }
}

export function Markdown({ children }: { children: string }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeWrapCallout]}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
