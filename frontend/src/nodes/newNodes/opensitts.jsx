import { SiOpenai } from "react-icons/si";
import BaseNode from "../baseNode";
export const OpenAiTtsNode = ({ id, data }) => {
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
  const selectTags = [
    {
      name: "Model:",
      value: [
        { value: "text", name: "Gemini-pro" },
        { value: "text", name: "Gemini-pro-1.5" },
      ],
    },
    {
        name:"Voice",
        value:[
            {value:"text",name:"TTS-1"},
            {value:"text",name:"TTS-1-hd"}
        ]
    }
  ];

  return (
    <BaseNode
      input={input}
      Icon={SiOpenai}
      heading="openAI TTS"
      inputTags={[]}
      selectTags={selectTags}
      output={output}
    />
  );
};