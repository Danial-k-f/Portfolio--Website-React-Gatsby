import React from 'react'
import Layout from '../components/Layout'
import {motion} from "framer-motion"
import Navbar from '../components/Navbar';
import {Carousel} from 'react-bootstrap';
import '../styles/bootstrap.min.css'


import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3 .jpg';
import image4 from '../images/image4.jpg';



export default function Projects() {
  return (

<motion.div
    initial={{width:0}}
    animate={{width:"100%",transition: { duration:0.2} }}
    exit={{x:window.innerHeight,transition: { duration:0.2} }}
      >
       
         <div className=" bg-slate-500 m-auto">

            <div className="flex pt-10">

<Carousel className="  border-black m-auto justufy-center ">
            <Carousel.Item className="text-2xl  justify-center">
             
              <img src={image1} alt=''className=" rounded-2xl w-80  h-80"/>
              {/* <Img fluid={props.data.image5ql.childImageSharp.fluid} alt="this is the first pic"/> */}
              {/* <Carousel.Caption><h1> this is one of our single track called blu days </h1></Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className="text-2xl  justify-center">
            
              <img src={image2} alt=''className="w-80 h-80 rounded-2xl"/>
            </Carousel.Item>
            <Carousel.Item className="text-2xl  justify-center">
             
              <img src={image3} alt=''className="w-80 h-80 rounded-2xl"/>
            </Carousel.Item>
            <Carousel.Item className="text-2xl  justify-center"> 
              
              <img src={image4} alt=''className="w-80 h-80 rounded-2xl"/>
            </Carousel.Item>
</Carousel>

</div>
         </div>
         <Navbar/>
    <Layout>
    <div>
      <h1>My Projects Here</h1>
      <br/><br/>
    </div>  

    </Layout>
</motion.div>
  )
}
export const Head = () => <title>My Projects</title>