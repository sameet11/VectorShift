// llmNode.js
import { SiOpenai } from "react-icons/si";
import BaseNode from "./baseNode";
export const LLMNode = ({ id, data }) => {
  const input = [
    {
      type: "target",
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
    },
  ];

  const output = [
    {
      type: "source",
      id: `${id}-response`,
    },
  ];
  const inputTags = [
    { name: "System:", value: "" },
    { name: "prompt", value: "" },
  ];
  const selectTags = [
    {
      name: "Type:",
      value: [
        { value: "text", name: "gpt-4" },
        { value: "text", name: "gpt-3" },
        { value: "text", name: "gpt-4-turbo" },
        { value: "text", name: "gpt-3-turbo" },
      ],
    },
  ];

  return (
    <BaseNode
      input={input}
      Icon={SiOpenai}
      heading="OpenAI LLM"
      inputTags={inputTags}
      selectTags={selectTags}
      output={output}
    />
  );
};
