import { Quill } from "react-quill";

const BlockEmbed = Quill.import("blots/block/embed");

class ImageBlot extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.setAttribute("alt", value.alt);
    node.setAttribute("src", value.url);
    return node;
  }

  static value(node) {
    return {
      alt: node.getAttribute("alt"),
      url: node.getAttribute("src")
    };
  }

  format(name, value) {
    if (name === "height" || name === "width") {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name, value);
      }
    } else {
      super.format(name, value);
    }
  }
}
ImageBlot.blotName = "imagecustom";
ImageBlot.tagName = "hr";

export default ImageBlot;
