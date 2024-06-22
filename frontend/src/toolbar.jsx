// toolbar.js
import { useState } from "react";
import { SiOpenai } from "react-icons/si";
import { DraggableNode } from "./component/draggableNode";
import Navbar from "./component/navbar";
import { MdInput } from "react-icons/md";
import { MdOutlineOutput } from "react-icons/md";
import { MdOutlineTextSnippet } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
export const PipelineToolbar = () => {
  const nodes = [
    { type: "customInput", label: "Input", icon: MdInput },
    {
      type: "llm",
      label: "LLM",
      icon: SiOpenai,
    },
    {
      type: "customOutput",
      label: "Output",
      icon: MdOutlineOutput,
    },
    {
      type: "text",
      label: "Text",
      icon: MdOutlineTextSnippet,
    },
    {
      type: "transformation",
      label: "Transform",
      icon: MdOutlinePlayCircle,
    },
    {
        type:"imagegen",
        label:"Image Gen",
        icon:MdOutlineImage,
    },
    {
        type:"gemini",
        label:"Gemini",
        icon:FaGoogle,
    },{
        type:"speech",
        label:"Speech-text",
        icon:IoMdMic,
    }
  ];

  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen((prev) => !prev);
  };
  return (
    <>
      {open ? (
        <button className="text-[#7A7DF3] mt-2 p-4" onClick={handleClick}>
          <IoIosAddCircle size={35} />
        </button>
      ) : (
        <div className="shadow-lg">
          <Navbar />
          <div className="flex flex-wrap gap-5 p-4">
            {nodes.map((ele) => {
              return (
                <DraggableNode
                  type={ele.type}
                  label={ele.label}
                  icon={ele.icon}
                />
              );
            })}
          </div>
        </div>
      )}
      {open ? (
        ""
      ) : (
        <button className="mt-2 p-4 text-[#7A7DF3]" onClick={handleClick}>
          <IoClose size={35} />
        </button>
      )}
    </>
  );
};
