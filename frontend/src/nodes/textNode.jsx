import BaseNode from './baseNode';
import { MdOutlineTextSnippet } from "react-icons/md";

export const TextNode = ({ id, data }) => {
  const output=[
    {
      type:"source",
      id:`${id}-output`
    }
  ]
  const inputTags=[{name:"Field Name:",value:data?.inputName || id.replace('customInput-', 'input_')}]
  return(
    <BaseNode input={[]} Icon={MdOutlineTextSnippet} heading="Text" inputTags={inputTags} selectTags={null} output={output}>
    </BaseNode>
  )
}

