// llmNode.js
import { MdOutlineImage } from "react-icons/md";
import BaseNode from "../baseNode";
export const ImageGeneration = ({ id, data }) => {
  const input = [
    { type: "target", id: `${id}-system`,style: { top: `${85 / 3}%` }},
  ];

  const output = [
    {
      type: "source",
      id: `${id}-response`,
    },
  ];
  const inputTags = [
    { name: "prompt", value: "" },
  ];
  const selectTags = [
    {
      name: "Model:",
      value: [
        { value: "text", name: "Dalle 2" },
        { value: "text", name: "Dalle3" },
        { value: "text", name: "Stable Diffusion XL" },
      ],
    },
    {
      name: "Size:",
      value: [
        { value: "text", name: "1024 X 1024" },
        { value: "text", name: "512 X 512" },
        { value: "text", name: "256 X 256" },
      ],
    },
    {
      name: "Count:",
      value: [
        { value: "text", name: "1" },
        { value: "text", name: "2" },
        { value: "text", name: "3" },
        { value: "text", name: "4" },
      ],
    },
  ];

  return (
    <BaseNode
      input={input}
      Icon={MdOutlineImage}
      heading="Image Generation"
      inputTags={inputTags}
      selectTags={selectTags}
      output={output}
    />
  );
};
