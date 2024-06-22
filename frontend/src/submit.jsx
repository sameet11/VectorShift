// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
      const nodes=useStore((state)=>state.nodes);
      const edges=useStore((state)=>state.edges);
      const HandleClick= async ()=>{
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ nodes, edges }),
            });
      
            const data = await response.json();
            alert(`Number of nodes: ${data.num_nodes}, Number of edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
          } catch (error) {
            console.error('Error:', error);
          }
      }
    return (
        <div className='text-center p-4'>
            <button onClick={HandleClick} className='bg-[#7A7DF3] text-[#C8CACF] p-2 rounded-md'>Submit</button>
            </div>
    );
}
