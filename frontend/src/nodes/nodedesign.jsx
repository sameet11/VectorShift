import React, { useState, useRef, useEffect } from "react";

const NodeDesign = ({ Icon, heading, inputTags, selectTags }) => {
  const defaultValues = inputTags.map((tag) => tag.value);
  const [inputValues, setInputValues] = useState(defaultValues);
  const [inputType, setInputType] = useState("Text");
  const textareaRefs = useRef([]);

  useEffect(() => {
    textareaRefs.current.forEach((ref) => {
      ref.style.height = "auto";
      ref.style.height = `${Math.min(ref.scrollHeight, 100)}px`;
    });
  }, [inputValues]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    const textarea = textareaRefs.current[index];
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 500)}px`;
  };


  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="border-[5px] border-[#A9ABF7] rounded-md">
      <div className="p-2 max-h-fit w-[300px] rounded-sm border-2 border-[#7A7DF3]">
        <div className="flex items-center gap-2 text-[#7A7DF3]">
          <Icon />
          <span className="text-base">{heading}</span>
        </div>
        <div className="flex flex-col">
          {inputTags?.map((input, index) => (
            <label key={index} className="flex flex-col gap-2">
              <span className="text-[#C8CACF]">{input.name}</span>
                <textarea
                  ref={(el) => (textareaRefs.current[index] = el)}
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="border border-[#7A7DF3] rounded-md p-1 resize-none"
                />
            </label>
          ))}
          <label className="mt-1 flex flex-col gap-2">
            <span className="text-sm text-[#C8CACF]">{selectTags?.name}</span>
            {selectTags && (
              <select
                value={inputType}
                onChange={handleTypeChange}
                className="border border-[#7A7DF3] rounded-md p-1"
              >
                {selectTags.value.map((option, index) => (
                  <option key={index} value={option.value} className="p-5">
                    {option.name}
                  </option>
                ))}
              </select>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default NodeDesign;
