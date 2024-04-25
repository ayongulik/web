import { visit } from "unist-util-visit";

const defaultReplacer = async (url: string) => url;

export function RemarkLinkRewrite(options = { replacer: defaultReplacer }) {
  const { replacer } = options;
  return async (tree: any) => {
    const nodes: any = [];

    visit(tree, (node) => {
      if (node.type === "link") {
        nodes.push(node);
      }
    });

    await Promise.all(
      nodes.map(async (node: any) => {
        if (node.type === "link") {
          node.url = await replacer(node.url);
        }
      }),
    );
    return tree;
  };
}
