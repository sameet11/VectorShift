import { Handle, Position } from 'reactflow';
import NodeDesign from './nodedesign';

const BaseNode = ({ input, Icon, heading, inputTags, selectTags, output, children }) => {
  const handleStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: 'white',
    border: '2px solid #C8CACF'
  };

  return (
    <>
      {input.map((obj, index) => (
        <Handle
          key={index}
          id={obj.id}
          type={obj.type}
          style={{ ...obj.style, ...handleStyle }}
          position={Position.Left}
        />
      ))}
      <NodeDesign Icon={Icon} heading={heading} inputTags={inputTags} selectTags={selectTags}>
        {children}
      </NodeDesign>
      {output.map((obj, index) => (
        <Handle
          key={index}
          id={obj.id}
          type={obj.type}
          style={{ ...obj.style, ...handleStyle }}
          position={Position.Right}
        />
      ))}
    </>
  );
};

export default BaseNode;




