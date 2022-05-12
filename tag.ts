export interface Text {
  type: "text";
  content: string;
}

type Attributes = Record<string, string>;

type Children = Array<Text | Tag | SelfClosingTag>;

export interface Tag {
  type: "tag";
  name: string;
  attrs: Attributes;
  children: Children;
}

export interface SelfClosingTag {
  type: "self-closing-tag";
  name: string;
  attrs: Attributes;
}

export const text = (content: string): Text => ({ type: "text", content });

export const tag = (
  name: string,
  attrs: Attributes,
  children: Children,
): Tag => ({ type: "tag", name, attrs, children });

/** Creates self-closing tag */
export const tagS = (name: string, attrs: Attributes): SelfClosingTag => ({
  type: "self-closing-tag",
  name,
  attrs,
});

export const render = (markup: Text | Tag | SelfClosingTag): string => {
  switch (markup.type) {
    case "text":
      return markup.content;

    case "tag": {
      const { name, attrs, children } = markup;
      const attrsStr = Object.entries(attrs).map(([attr, value]) =>
        `${attr}="${value}"`
      ).join(" ");
      const childrenStr = children.map(render).join("\n");
      return `<${name} ${attrsStr}>${childrenStr}</${name}>`;
    }

    case "self-closing-tag": {
      const { name, attrs } = markup;
      const attrsStr = Object.entries(attrs).map(([attr, value]) =>
        `${attr}="${value}"`
      ).join(" ");
      return `<${name} ${attrsStr} />`;
    }
  }
};
