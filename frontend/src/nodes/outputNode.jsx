import BaseNode from './baseNode';
import { MdOutlineOutput } from "react-icons/md";

export const OutputNode = ({ id, data }) => {
  const input = [{ type: "target", id: `${id}-value` }];
  const inputTags=[{name:"Field Name:",value:data?.inputName || id.replace('customInput-', 'input_')}]
  const selectTags = [
    {
      name: "Type:",
      value: [
        { value: "text", name: "text" },
        { value: "file", name: "file" }
      ]
    }
  ];

  return (
    <BaseNode input={input} Icon={MdOutlineOutput} heading="Output" inputTags={inputTags} selectTags={selectTags} output={[]}/>
  );
};

