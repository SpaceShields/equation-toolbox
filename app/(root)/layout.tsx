import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <div className='absolute inset-x-0 top-0 h-10'>
          <Navbar />
        </div>
        <div className='mt-16'>
          {children}
        </div>
    </div>
  )
}

export default Layout