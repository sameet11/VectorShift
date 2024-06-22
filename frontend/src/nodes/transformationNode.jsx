import BaseNode from './baseNode';
import { MdOutlinePlayCircle } from "react-icons/md";

export const TransformationNode = ({ id, data }) => {
  const output=[
    {
      type:"source",
      id:`${id}-output`
    }
  ]
  const selectTags={name:"Transformation",value:[]}
  return(
    <BaseNode input={[]} Icon={MdOutlinePlayCircle} heading="Text" inputTags={[]} selectTags={selectTags} output={output}>
    </BaseNode>
  )
}