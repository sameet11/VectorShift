// draggableNode.js
export const DraggableNode = ({ type, label,icon:Icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
    return (
      <div
        className={`cursor-grab min-w-[70px] h-[65px] flex flex-col items-center justify-center rounded-md border border-[#6C737F] ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')} 
        draggable
      >
        <Icon size={25} className="text-[#6C737F]"/>
          <span className="text-[#6C737F] text-sm font-thin">{label}</span>
      </div>
    );
  };
  