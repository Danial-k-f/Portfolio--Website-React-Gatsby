import React, {useState,useEffect} from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

import Fx2 from './fx2.mp3'

const fx = new Audio(Fx2);

function togglePlay() {
  fx.play() 

}
const Scroll = () => {
    const [showScrollTopButton,setShowScrollTopButton] = useState(false);

    useEffect(()=> {
    
        window.addEventListener( 'scroll', () =>{
            if(window.scrollY>300) {
                setShowScrollTopButton(true)  
            } else {
                setShowScrollTopButton(false)
            }
          
        })
     
    },[])
    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
       }

  return (
    <div className='bg-slate-600 rounded-full text-slate-100 border-slate-600'>
      {showScrollTopButton &&<ChevronDoubleUpIcon  className='fixed bg-slate-600 w-14 h-14 z-40 animate-bounce hover:scale-125 shadow-lg p-1 rounded-full cursor-pointer bottom-4 right-5' onClick={()=>{scrollTop(); togglePlay()}}/>}
    </div>
  )
}

export default Scroll
