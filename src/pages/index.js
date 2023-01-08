import * as React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { useRef, useState } from "react"
import Scroll from "../components/Scroll"



import {AnimatePresence, motion } from "framer-motion"

import {Carousel} from 'react-bootstrap';
import '../styles/bootstrap.min.css'


import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import Musician from '../images/Musician.jpg';
import webdeveloper from '../images/webdeveloper.jpg';
import desiner from '../images/desiner.png';
import dev from'../images/dev.png'
import mus from'../images/mus.png'
import interior from'../images/interior.png'


import Viz from './Viz.mp3'





 const IndexPage = (props) => {
 const musician = useRef(null);
 const developer = useRef(null);
 const designer = useRef(null);
 const [move, setMove] = useState (false);
 const viz = new Audio(Viz);



 const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth'
  })
 }

 function togglePlay () {
   viz.play() 
 
}

  return (
// {/* <App> */}
 <div className="flex ">
 
    <motion.div
    initial={{width:0}}
    animate={{width:"100%",transition: { duration:0.2} }}
    exit={{x:window.innerWidth,transition: { duration:0.2} }}
    >
      <div className=" bg-slate-500 m-auto">

         <div className=" justify-between"> 
          <Carousel className="  "> 
                      <Carousel.Item className=" ">
                       
                        <img src={image5} alt=''className=" m-auto  xl:md:rounded-2xl "/>
                        {/* <Img fluid={props.data.image5ql.childImageSharp.fluid} alt="this is the first pic"/> */}
                         <Carousel.Caption className=" "><h4> </h4></Carousel.Caption> 
                      </Carousel.Item>
                      <Carousel.Item >
                    
                    <img src={image8} alt=''className=" m-auto xl:md:rounded-2xl"/>
                  </Carousel.Item>
                      <Carousel.Item >
                    
                        <img src={image6} alt=''className=" m-auto xl:md:rounded-2xl"/>
                      </Carousel.Item>
                      <Carousel.Item >
                    
                        <img src={image7} alt='' className=" m-auto  xl:md:rounded-2xl"/>
                      </Carousel.Item> 
                
                 
          </Carousel> 
          
</div>
      </div>
      <Navbar/>
    <Layout>
      

     <AnimatePresence> 
        <div>
          <div className="md:flex">
<div>

          <motion.h2 
          initial={{ opacity: 0 }}
          animate={{x:[-100, 0],opacity: 1}} 
          transition={{duration:1}}
          exit={{ opacity: 0 }}
          >Danial Kooshki</motion.h2>

          <motion.h3
          initial={{ opacity: 0 }}
          animate={{x:[-100, 0], opacity: 1}}
          transition={{delay:0.1,duration:1.5}}
          exit={{ opacity: 0 }}
          >Based in Iran/Mashhad</motion.h3>

          <motion.p
          initial={{ opacity: 0 }}
          animate={{x:[-100, 0], opacity: 1}} 
          transition={{delay:0.3,duration:2}}
          exit={{ opacity: 0 }}
          >
          My name is Danial Kooshki, I am 34 years old, and I have worked in different career fields until today
          You can find out about these three main areas of my work through the following links... . Also, you can select the portfolio option in the main menu to learn more about examples of my projects and activities that I have done so far.</motion.p>
       <div className="pt-8 pb-8 h-48"></div>
        {/* <Animation/> */}
        </div>
    
        <div className="hero pb-24 pt-0 ">
      <ul className="flex space-x-3 justify-center text-black text-base h-24">
        <motion.li
        animate={{x:[118,0]}}
        transition={{type:"spring",duration:2}}
        onClick={()=> {scrollToSection(developer); setMove(!move); togglePlay()}}  
        className="white p-2 mt-1 cursor-pointer hover:scale-110 transition-all   ease-in-out rounded-full">
          <div className=" rounded-md pt-0 pb-0 w-24 h-12"> <img src={dev} className="" alt="dev"/> </div>
          <h6 className=" pt-16">Web Developer</h6></motion.li>
        <li onClick={()=> {scrollToSection(musician);setMove(!move); togglePlay()} }
        className="  mt-1 cursor-pointer  hover:scale-110 transition-all ease-in-out rounded-md">
           <div className=" rounded-md w-24 pt-2 h-12"> <img src={mus} className="" alt="music"/> </div>
          <h6 className=" pt-20 ">Musician</h6></li>
        <motion.li
         animate={{x:[-118,0]}}
         transition={{type:"spring",duration:2}}
        onClick={()=> {scrollToSection(designer);setMove(!move); togglePlay()} }
        className=" p-2 mt-1 cursor-pointer  hover:scale-110 transition-all ease-in-out rounded-md font">
          <div className=" rounded-md   w-24 h-12"> <img src={interior} className=" w-74"  alt="interior"/> </div>
          <h6 className="  pt-16">Interior Designer</h6></motion.li>
      </ul>
    </div>
          </div>
 <div onClick={()=>{setMove(!move)}} ><Scroll/></div>
        </div>
          </AnimatePresence>
  <div className="aspects">

         <div ref={musician} className="mb-40">
         <motion.h1
          initial={{ opacity: 0 }}
          animate={{x: move? [-100, 0]:0, opacity: move? 1:1 }}
          transition={{delay:0.1,duration:1}}
          exit={{ opacity: move? 0:0 }}
          onClick={()=>{setMove(!move)}}> As a Musician/Composer </motion.h1>
         <motion.p
              initial={{ opacity: 0 }}
              animate={{x: move? [-100, 0]:0, opacity: move? 1:1 }}
              transition={{delay:0.3,duration:1.5}}
              exit={{ opacity: move? 0:0 }}
              onClick={()=>{setMove(!move)}}
         >Nulla anim aliquip proident nisi sint reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit.reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit</motion.p>
         <motion.div
              initial={{ opacity: 0 }}
              animate={{x: move? [500, 0]:0, opacity: move? 1:1 }}
              transition={{delay:0.1,duration:1}}
              exit={{ opacity: move? 0:0 }}
              onClick={()=>{setMove(!move)}}
         ><img src={Musician} className="opacity-70" alt='music'/></motion.div>
      </div>
      <div ref={developer} className="mb-56">
         <motion.h1
          initial={{ opacity: 0 }}
          animate={{x: move? [-100, 0]:0, opacity: move? 1:1 }}
          transition={{delay:0.1,duration:1}}
          exit={{ opacity: move? 0:0 }}
          onClick={()=>{setMove(!move)}}
         >As a Frontend Developer/UX Designer</motion.h1>
         <motion.p
         initial={{ opacity: 0 }}
         animate={{x: move? [-100, 0]:0, opacity: move? 1:1 }}
         transition={{delay:0.3,duration:1.5}}
         exit={{ opacity: move? 0:0 }}
         onClick={()=>{setMove(!move)}}
         >Nulla anim aliquip proident nisi sint reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit.reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit</motion.p>
         <motion.div
          initial={{ opacity: 0 }}
          animate={{x: move? [500, 0]:0, opacity: move? 1:1 }}
          transition={{delay:0.1,duration:1}}
          exit={{ opacity: move? 0:0 }}
          onClick={()=>{setMove(!move)}}
         ><img src={webdeveloper} alt='developer'/></motion.div>
      </div>
      <div ref={designer} className="mb-48">
         <motion.h1>As an Interior Designer/ 3d Modeler</motion.h1>
         <motion.p
          initial={{ opacity: 0 }}
          animate={{x: move? [-100, 0]:0, opacity: move? 1:1 }}
          transition={{delay:0.3,duration:1.5}}
          exit={{ opacity: move? 0:0 }}
          onClick={()=>{setMove(!move)}}
         >Nulla anim aliquip proident nisi sint reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit.</motion.p>
         <motion.div
         initial={{ opacity: 0 }}
         animate={{x: move? [500, 0]:0, opacity: move? 1:1 }}
         transition={{delay:0.1,duration:1}}
         exit={{ opacity: move? 0:0 }}
         onClick={()=>{setMove(!move)}}
         ><img src={desiner} className="" alt='designer'/></motion.div>
      </div>
         </div>
    </Layout>
 </motion.div>
  
  
          </div>
)

}
export default IndexPage
export const Head = () => <title>EPK</title>

