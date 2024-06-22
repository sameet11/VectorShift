import { IoIosSearch } from "react-icons/io";
const navElements=['General','LLMs','Knowledge Base','Integrations','Data Loaders','Multi-Modal','Logic','Chat']
const Navbar=()=>{
    return(
        <div className='flex gap-5 pl-4 p-2 cursor-pointer'>
        <button className="hover:bg-slate-50 hover:rounded-full h-9 w-9 flex items-center justify-center">
        <IoIosSearch size={25} className="text-[#6C737F]" />
        </button>
        {navElements.map((ele,id)=>{
            return(
                <div className="flex items-center justify-center text-[#6C737F] text-sm font-semibold hover:text-[#9294F7] cursor-pointer">{ele}</div>
            )
        })}
        </div>
    )
}
export default Navbar;