import React, {Component} from 'react'
import { Link } from 'gatsby'
import {  HomeIcon, MagnifyingGlassIcon, UserCircleIcon,ClipboardDocumentIcon, EnvelopeIcon,Bars3Icon, XMarkIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { AnimatePresence,motion } from 'framer-motion'
import Pluck from './Pluck.mp3'



const pluck = new Audio(Pluck);




class Navbar extends Component {

  state={clicked:false}
 
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
   
    pluck.play();
    


  }
  render() {
    return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{y:[-20, 0],opacity: 1}} 
    transition={{duration:1}}
    exit={{ opacity: 0 }}
    className='header p-2 sticky'>
<AnimatePresence>
  

    <motion.nav
     initial={{ opacity: 0 }}
     animate={{y:[-50, 0],opacity: 1}} 
     transition={{duration:1.5}}
     exit={{ opacity: 0 }}
     >

      {/* <h1>Web Warrior</h1> */}
      <ul className=" justify-around flex m-auto  text-xl text-sky-100 font-mono lg:max-w-[95%]">
      <div className=' item-center space-x-24 flex'>
      <Link className='notification' to="" onClick={this.handleClick}>{this.state.clicked ? <ChevronDoubleUpIcon className='w-6 text-white justify-center md:hidden animate-pulse h-6'></ChevronDoubleUpIcon>: <ChevronDoubleDownIcon className='w-6  text-white md:hidden animate-pulse h-6' />}
      
      </Link>
      <div className='max-w-xs hidden  md:flex m-0 p-0'>
      <div className='relative mt-0 p-2 rounded-md hover:scale-125 transition-all duration-150 ease-out'>
        <div className='sm:max-w-[100%]'>
        <div className='absolute inset-y-2 pl-2 flex item-center pointer-events-none'>
      <MagnifyingGlassIcon className=' w-6 h-6 mt-0.5 cursor-pointer-none   text-gray-500' /> 
      </div>
      <input className='bg-gray-200 block w-full h-7 pl-10 sm:text-sm text-black border-gray-600 rounded-md focus:ring-black focus:border-black' type='text' placeholder='Search...' />
      </div>
        </div>
      </div>
      <div>

      <div id={this.state.clicked?"":"navbar"} className={this.state.clicked?'navbar  flex flex-col place-items-baseline justify-start lg:md:flex-row relative md:absolute item-center pl-0  border-stone-500 pb-4 rounded-md ':' right-0 hidden'}>
  
      
       <Link className='navBtm' onClick={this.handleClick} to="/"> <HomeIcon className='icon'/>Home</Link>
       <Link className='navBtm' onClick={this.handleClick} to="/about"><UserCircleIcon className='icon'/>About</Link>
       <Link className='navBtm' onClick={this.handleClick} to="/projects"><ClipboardDocumentIcon className='icon'/>Portofolio</Link>
       <Link className='navBtm' onClick={this.handleClick} to="/Contact"><EnvelopeIcon className='icon'/>Contact</Link> 
       {/* <Link className='' to="/"><ListBulletIcon className='w-7 h-7 lg:hidden md:hidden cursor-pointer'/></Link>  */}

       </div>
      </div>
      
       <Link className='burger' to="" onClick={this.handleClick}>{this.state.clicked ? 
       <XMarkIcon className='w-7 h-7  text-gray-200 lg:hidden md:hidden  cursor-pointer hover:scale-125 transition-all duration-150 ease-out'/>
       : <Bars3Icon className='w-7 h-7  text-gray-200 lg:hidden md:hidden  cursor-pointer hover:scale-125 transition-all duration-150 ease-out'/>}
       </Link>
       </div>
      </ul>
    </motion.nav>
      </AnimatePresence>
     </motion.div>
  )
}
}

export default Navbar

