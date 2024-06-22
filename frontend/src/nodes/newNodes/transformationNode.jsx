import BaseNode from '../baseNode';
import { MdOutlinePlayCircle } from "react-icons/md";

export const TransformationNode = ({ id, data }) => {
  const output=[
    {
      type:"source",
      id:`${id}-output`
    }
  ]
  const selectTags = [
    {
      name: "Transformation",
      value: [
        { value: "text", name: "gpt-4" },
      ]
    }
  ];
  return(
    <BaseNode input={[]} Icon={MdOutlinePlayCircle} heading="Transformation" inputTags={[]} selectTags={selectTags} output={output}/>
  )
}