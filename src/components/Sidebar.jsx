import { useDispatch, useSelector } from "react-redux";
import { selectedCategory } from "../redux/slice/categorySlice";
import { toggleSidebar } from "../redux/slice/sidebarSlice";


function Sidebar() {
    const sidebarVisible = useSelector(state => state.sidebar.isVisible);
    const category = useSelector(state => state.category.cate)
    const dispatch=useDispatch();

    const handleCategory=(cate)=>{
      dispatch(selectedCategory(cate));
      dispatch(toggleSidebar())
    }
  return (
    <div>
      <div className={`categories    ${sidebarVisible ? 'block' : 'hidden'} text-white bg-gray-900 w-screen  px-3 py-1 space-y-3 z-50`}>
        
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'general' ? 'bg-slate-500' : 'hover:bg-slate-500'}`} onClick={()=>handleCategory('general')}>General</div>
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'technology' ? 'bg-slate-500' : 'hover:bg-slate-500'}`}  onClick={()=>handleCategory('technology')}>Technology</div>
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'business' ? 'bg-slate-500' : 'hover:bg-slate-500'}`}  onClick={()=>handleCategory('business')}>Business</div>
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'entertainment' ? 'bg-slate-500' : 'hover:bg-slate-500'}`}  onClick={()=>handleCategory('entertainment')}>Entertainment</div>
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'health' ? 'bg-slate-500' : 'hover:bg-slate-500'}`}  onClick={()=>handleCategory('health')}>Health</div>
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'science' ? 'bg-slate-500' : 'hover:bg-slate-500'}`}  onClick={()=>handleCategory('science')}>Science</div>
                <div className={`cat rounded-md px-2 cursor-pointer ${category === 'sport' ? 'bg-slate-500' : 'hover:bg-slate-500'}`}  onClick={()=>handleCategory('sport')}>Sports</div>

            </div>

    </div>
  )
}
 
export default Sidebar

