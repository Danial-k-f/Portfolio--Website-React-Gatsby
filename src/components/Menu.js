
import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


// const navSlide = () => {
// const burger = document.getElementsByClassName('.burger');

// burger.addEventListener ('click', () => {


// })
// }
// navSlide();
class Menu extends Component {
  state={clicked:false}
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <div>
            <Link className='burger' to="/" onClick={this.handleClick}>{this.state.clicked ? <XMarkIcon className='w-7 h-7  text-gray-200 lg:hidden md:hidden  cursor-pointer hover:scale-125 transition-all duration-150 ease-out'/>: <Bars3Icon className='w-7 h-7  text-gray-200 lg:hidden md:hidden  cursor-pointer hover:scale-125 transition-all duration-150 ease-out'/>}</Link>
            {/* <Link className='cancel' to="/"><XMarkIcon className='w-7 h-7  text-gray-200 lg:hidden md:hidden  cursor-pointer hover:scale-125 transition-all duration-150 ease-out'/></Link> */}
      </div>
    )
  }
}

export default Menu
