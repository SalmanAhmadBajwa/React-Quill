import { Quill } from "react-quill"; // ES6

import ImageBlot from "./Image";
import Counter from "./Counter";

Quill.register("formats/imagecustom", ImageBlot);
Quill.register("modules/counter", Counter);


export const modules = options => ({
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "imagecustom"],
    ["clean"]
  ],
  counter: {
    unit: "word",
    onUpdate: options.onCount
  }
});

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "imagecustom"
];
