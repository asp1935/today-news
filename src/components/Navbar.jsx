// import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { toggleSidebar } from '../redux/slice/sidebarSlice';
import { updateQuery } from '../redux/slice/searchQuerySlice';

function Navbar() {
    const [search, setSearch] = useState(false);
    const [newsQuery,setNewsQuery]=useState('')
    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };

    const handleSearch=()=>{
        dispatch(updateQuery(newsQuery))
        
    }

    return (
        <>
            <div className='navbar bg-gray-900 text-white flex items-center space-x-3 text-2xl md:text-xl justify-between p-4 border-b-[1px]'>
                <i className="fa-solid fa-bars" style={{ color: '#ffffff' }} onClick={handleToggleSidebar} />
                
                <h1><span className='text-red-600'>Dot</span>  News</h1>
                <div className='md:hidden'>
                    {search && <><input type='text'
                        placeholder='Search...'
                        className='search bg-white rounded-lg mx-4 w-36 px-2' /></>
                    }
                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }} onClick={() => setSearch(!search)} />

                </div>
                <div className=' hidden md:block'>
                    <input type='text'
                        placeholder='Search...'
                        name='search'
                        onChange={(e)=>setNewsQuery(e.target.value)}
                        className='search bg-white rounded-lg mx-4 px-2 text-black' />
                    <button type='button' className='bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-xl' onClick={handleSearch}>Search</button>
                </div>



            </div>
            
        </>
    )
}

export default Navbar
