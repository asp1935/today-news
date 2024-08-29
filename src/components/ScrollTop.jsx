
import { useEffect } from 'react';
import { useState } from 'react'

function ScrollTop() {
    const  [showSTbtn,setShowSTbtn]=useState(false);

    useEffect(()=>{
      const handlScroll=()=>{
        if(window.scrollY>90){
          setShowSTbtn(true);
      }else{
          setShowSTbtn(false);
      }
      };
      window.addEventListener('scroll',handlScroll);
      return()=>{
        window.removeEventListener('scroll',handlScroll);
      };
        
    },[]);

    const scrolltoTop=()=>{
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      } 


  return (
    <div>
      {showSTbtn&& <i onClick={scrolltoTop} className="fa-solid fa-angles-up  w-8 h-8 fixed right-4 bottom-12  bg-blue-400 p-2 rounded-full"></i>}
      
    </div>
  )
}

export default ScrollTop;
