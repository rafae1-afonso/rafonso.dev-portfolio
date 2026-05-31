import { createElement, type ReactNode } from "react"

export function htmlStringToReactNodes(html: string, keyPrefix = "html"): ReactNode[] {
  const nodes: ReactNode[] = []
  const regex = /<strong>(.*?)<\/strong>|<em>(.*?)<\/em>|<br\s*\/?\s*>|<a\s+href="([^"]+)">(.*?)<\/a>/gi
  let lastIndex = 0
  let match: RegExpExecArray | null
  let index = 0

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(html.slice(lastIndex, match.index))
    }

    const key = `${keyPrefix}-${index++}`

    if (match[1]) {
      nodes.push(
        createElement(
          "strong",
          { key },
          ...htmlStringToReactNodes(match[1], `${key}-strong`)
        )
      )
    } else if (match[2]) {
      nodes.push(
        createElement(
          "em",
          { key },
          ...htmlStringToReactNodes(match[2], `${key}-em`)
        )
      )
    } else if (match[0].startsWith("<br")) {
      nodes.push(createElement("br", { key }))
    } else if (match[3] && match[4]) {
      nodes.push(
        createElement(
          "a",
          { key, href: match[3] },
          ...htmlStringToReactNodes(match[4], `${key}-a`)
        )
      )
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < html.length) {
    nodes.push(html.slice(lastIndex))
  }

  return nodes
}
