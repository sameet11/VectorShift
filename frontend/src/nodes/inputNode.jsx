// inputNode.js

import { MdInput } from "react-icons/md";
import BaseNode from './baseNode';

export const InputNode = ({ id, data }) => {
  const output = [{ type: "source", id: `${id}-value` }];
  const inputTags=[{name:"Field Name:",value:data?.inputName || id.replace('customInput-', 'input_')}]
  const selectTags={name:"Type:",value:[{value:"text",name:"text"},{value:"file",name:"file"}]}
  return (
    <BaseNode input={[]} Icon={MdInput} heading="Input" inputTags={inputTags} selectTags={selectTags} output={output}>
    </BaseNode>
  );
};
