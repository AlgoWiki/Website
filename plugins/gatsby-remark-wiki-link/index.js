const visit = require("unist-util-visit")

module.exports = ({ markdownAST }) => {
  // Support wiki-style links of the form [Example]()
  visit(markdownAST, "link", node => {
    if (!node.url) {
      node.url = node.children[0].value
    }
  })

  // Support links that have spaces in the URL part
  visit(markdownAST, "text", (node, index, parent) => {
    // Look for strings that match the pattern [text](url)
    const matches = node.value.matchAll(/\[(.+?)\]\((.+?)\)/g)

    if (!matches) {
      return
    }

    // Split the text node into multiple nodes at the positions of the wiki links
    const nodes = []
    let lastIndex = 0
    for (const match of matches) {
      if (match.index > lastIndex) {
        nodes.push({
          type: "text",
          value: node.value.slice(lastIndex, match.index),
        })
      }
      const text = match[1]
      const url = match[2] ? match[2] : text
      nodes.push({
        type: "link",
        url,
        children: [{ type: "text", value: text }],
      })
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < node.value.length - 1) {
      nodes.push({
        type: "text",
        value: node.value.slice(lastIndex),
      })
    }

    parent.children.splice(parent.children.indexOf(node), 1, ...nodes)
  })

  return markdownAST
}
