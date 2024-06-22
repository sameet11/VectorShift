
import { IoMdMic } from "react-icons/io";
import BaseNode from "../baseNode";
export const SpeechNode = ({ id, data }) => {
  const input = [
    {
      type: "target",
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
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
        { value: "text", name: "OpenAI Whisper" },
      ],
    },
  ];

  return (
    <BaseNode
      input={input}
      Icon={IoMdMic}
      heading="Speech to Text"
      inputTags={[]}
      selectTags={selectTags}
      output={output}
    />
  );
};