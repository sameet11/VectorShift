import { FaGoogle } from "react-icons/fa";
import BaseNode from "../baseNode";
export const GeminiNode = ({ id, data }) => {
  const input = [
    {
      type: "target",
      id: `${id}-system`,
      style: { top: `${150 / 3}%` },
    },
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
      name: "Type:",
      value: [
        { value: "text", name: "Gemini-pro" },
        { value: "text", name: "Gemini-pro-1.5" },
      ],
    },
  ];

  return (
    <BaseNode
      input={input}
      Icon={FaGoogle}
      heading="Google Gemini"
      inputTags={inputTags}
      selectTags={selectTags}
      output={output}
    />
  );
};