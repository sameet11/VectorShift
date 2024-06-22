import { MdOutlineTextSnippet } from "react-icons/md";
import { MdCodeOff } from "react-icons/md";
import { MdOutlineCode } from "react-icons/md";
import { Handle, Position } from "reactflow";
import { useState,useEffect,useRef} from "react";

export const TextNode = ({ id, data }) => {
  const handleStyle = {
    width: "15px",
    height: "15px",
    backgroundColor: "white",
    border: "2px solid #C8CACF",
    top: `${200 / 3}%`
  };
  const [inputValues, setInputValues] = useState('');
  const textareaRefs = useRef();
  const [isVariable,setIsvariable]=useState(false);
  const [variable,setvariable]=useState('');

  useEffect(() => {
    textareaRefs.current.height = "auto";
    textareaRefs.current.style.height = `${Math.min(textareaRefs.current.scrollHeight, 200)}px`;
  }, [inputValues]);

  const handleInputChange = (value) => {
    const regex = /{{(.+?)}}/;
  if (regex.test(value)) {
    const match=value.match(regex);
    setvariable(match[1]);
    setInputValues('');
    setIsvariable(true)
  } else {
    setInputValues(value);
    textareaRefs.current.style.height = "auto";
    textareaRefs.current.style.height = `${Math.min(textareaRefs.current.scrollHeight, 500)}px`;
  }
  };

  return (
    <>
     { isVariable && <Handle
        id={id + "-value"}
        type="target"
        style={handleStyle}
        position={Position.Left}
      />
     }
      <div className="border-[5px] border-[#A9ABF7] rounded-md max-h-[500px]">
        <div className="p-2 max-h-fit w-[300px] rounded-sm border-2 border-[#7A7DF3]">
          <div className="flex items-center gap-2 text-[#7A7DF3]">
            <MdOutlineTextSnippet />
            <span className="text-base">Text</span>
          </div>
          <div className="flex flex-col">
              <label className="flex flex-col gap-2">
                <div className="flex justify-between">
                <span className="text-[#C8CACF]">Text</span>
                {isVariable && <button className="text-[#7A7DF3] " onClick={()=>setIsvariable(false)}>
                  < MdCodeOff/> 
                  </button>}
                </div>
                <div className="w-full relative">
                <textarea
                  ref={textareaRefs}
                  value={inputValues}
                  onChange={(e) => handleInputChange(e.target.value)}
                  disabled={isVariable}
                  className="border border-[#7A7DF3] rounded-md p-1 resize-none w-full"
                />
                  {isVariable&& <div className="absolute top-1 left-2 p-1 flex items-center gap-2 border border-[#C8CACF] text-[#7A7DF3] rounded-md">
                    <div>
                    <MdOutlineCode/>
                    </div>
                  <div>
                  {variable}
                  </div>
                  </div>}
                </div>
              </label>
          </div>
        </div>
      </div>
      <Handle
        id={id + "-response"}
        type="source"
        style={handleStyle}
        position={Position.Right}
      />
    </>
  );
};
