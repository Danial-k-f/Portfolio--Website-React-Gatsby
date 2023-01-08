import React from 'react'

import '../styles/bootstrap.min.css'


export default function Layout({ children}) {
  return (
    <div className='bg-slate-300'>
   

      <div  className="content">
        { children }
      </div>
      <footer className='footer text-gray-200 p-4'>
        <p className='pt-1'>Copyright 2022 for Danial Kooshki</p>
      </footer>
    </div>
  )
}
