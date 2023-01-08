import React from 'react'
// import React from 'react'
import{motion} from "framer-motion";
import { useRef,useEffect, useState } from 'react';


import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3 .jpg';
import image4 from '../images/image4.jpg';


function Sphere() {
 
const images=[image1,image2,image3,image4];
const [width, setWidth]= useState(0);
const carousel = useRef();

  return (
    <div className='App'>
        <div className='ml-[20%] mr-[20%]'>
        <motion.div ref={carousel}
        className='carousel-outer'>
            <motion.div drag="x" dragConstraints={{right:0}} animate={{x:-1000}} transition={{duration:3}}
            //  animate={{x:-450}}
            className='inner-carousel'>
                {images.map(image =>{
                    return(
                            <motion.div
                            // animate={{scale: 1.2}}
                            // transition={{delay:.5,duration:2}}
                            className='pl-10 pt-3 pb-3 min-h-12'>
                              
                                <img className='pointer-events-none relative rounded-xl w-64 h-64' src={image} alt="" />
                         
                            </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
        </div>
    </div>
            
  )
                         
}

export default Sphere