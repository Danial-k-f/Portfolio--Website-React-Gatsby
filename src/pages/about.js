
import React from 'react'
import Layout from '../components/Layout'
import City2 from '../images/city2.jpg'
import {motion} from "framer-motion"
import {Carousel} from 'react-bootstrap';
import '../styles/bootstrap.min.css'
import Navbar from '../components/Navbar';


import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';

export default function about() {
  return (
      <motion.div
      initial={{width:0}}
      animate={{width:"100%",transition: { duration:0.2} }}
      exit={{x:window.innerWidth,transition: { duration:0.2} }}
      >
      
                 <div className=" justify-between"> 
          <Carousel className="  "> 
                      <Carousel.Item className=" ">
                       
                        <img src={image5} alt=''className=" m-auto xl:md:rounded-2xl "/>
                        {/* <Img fluid={props.data.image5ql.childImageSharp.fluid} alt="this is the first pic"/> */}
                         <Carousel.Caption className=" "><h4> </h4></Carousel.Caption> 
                      </Carousel.Item>
                      <Carousel.Item >
                    
                        <img src={image6} alt=''className=" m-auto xl:md:rounded-2xl"/>
                      </Carousel.Item>
                      <Carousel.Item >
                    
                        <img src={image7} alt='' className=" m-auto  xl:md:rounded-2xl"/>
                      </Carousel.Item> 
                
                 
          </Carousel> 
          
</div>
<Navbar/>
    <Layout>

    <div className= 'justify-between flex'>
      <div className='static md:relative'>
        <h1>
      About This Page
        </h1>
        <br/>
        <hr/>
        <br/>
       <p>Cupidatat excepteur adipisicing qui mollit sunt. Consequat nulla dolor officia fugiat tempor enim. Incididunt veniam elit aute voluptate laborum amet officia sit consectetur ad sunt non anim commodo. Reprehenderit magna id dolore fugiat ipsum sunt voluptate reprehenderit quis occaecat nostrud eu proident labore. Labore est commodo magna reprehenderit sit consectetur officia. Consequat tempor labore magna do nisi non cupidatat occaecat velit proident labore elit. Id qui culpa cillum do esse mollit aliqua exercitation deserunt non laboris.</p>

       <p>Nulla anim aliquip proident nisi sint reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit.</p>

       <p>Consequat sunt in occaecat cupidatat amet duis culpa magna sint aliquip ut aliqua eiusmod ad. Sit eu duis ea do nisi ex laborum sunt et ex sit esse. Laboris in duis occaecat non et in adipisicing consectetur exercitation fugiat. Adipisicing consectetur sint exercitation cupidatat.</p>

       <p>Irure aliquip nostrud est elit cillum laboris. Duis aliqua esse nulla nulla occaecat magna dolore deserunt id. Est adipisicing anim sit ipsum dolore irure eiusmod. Non in dolor consequat dolor incididunt duis est cillum ad aute consequat occaecat consectetur velit. Aliqua nulla qui reprehenderit officia ipsum elit Lorem excepteur cupidatat enim ipsum ea id ullamco. Aliquip excepteur irure cupidatat veniam et in ad.</p>
       <br/>
       <p>Nulla anim aliquip proident nisi sint reprehenderit exercitation sunt tempor velit aute mollit cupidatat. Enim labore aliquip qui est exercitation. Dolore excepteur exercitation cupidatat enim ut ut deserunt commodo duis nisi aliquip anim aute ad. Sint aliquip qui non nulla nisi eu. Lorem tempor irure dolore excepteur elit voluptate officia officia proident culpa nulla quis. Magna eu officia consequat deserunt. Veniam labore nulla ad Lorem ex excepteur eu velit.</p>

       </div>
      <div className='hidden w-full h-full object-contain justify-end mx-auto md:block '> <img className='rounded-xl opacity-90 hover:opacity-100' src={City2} alt="city" /></div>

    </div>
    </Layout>
      </motion.div>
  )
}

export const Head = () => <title>About This EPK</title>