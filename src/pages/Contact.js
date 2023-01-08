import { Formik } from 'formik'
import React from 'react'
import Layout from "../components/Layout"
// import formemail from '../../components/Formemail'
import {motion} from "framer-motion"
import Navbar from '../components/Navbar'



export default function contact() {
  return (
    <motion.div
    initial={{width:0}}
      animate={{width:"100%",transition: { duration:0.2} }}
      exit={{x:window.innerWidth,transition: { duration:0.2} }}
    >

       
     <Navbar/>
    <Layout>
    <div>
      <h1>Contact :</h1>
      <h3>Thank You For Visiting My Website</h3>
      <p>If you have any comments or suggestion you can Send me an email</p>
      <Formik>
        <form>
          <div className='flex  p-2 justify-start text-sm space-x-3 max-w-20'><h5 className='text-sm justify-center pt-1'>Email Address: </h5>
          <input type="email" className=' border' size="20"  placeholder="Email Adrress..."/>
          </div>
          <div className='flex p-2 justify-start text-sm space-x-10 max-w-20'>
          <h5 className='text-sm justify-center pt-1'>Message: </h5>
            <textarea type="message" className=' border ml-12' rows="4" cols="50" placeholder='Write Your Comment Here...'/>
          </div>
          <div> 
            <button type="submit" className=' bg-slate-600 w-20 rounded-md m-2 text-white m-l-3 p-1'> Send</button>
          </div>
        </form>
      </Formik>
      
    </div>

    
    </Layout>

    </motion.div>
    )
  }
  