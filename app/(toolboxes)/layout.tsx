import React from 'react'
import HomeIconButton from '../components/HomeIcon'
import GoToEquationsButton from '../components/GoToEquations'
import ProfileIconDropdownButton from '../components/ProfileDropdown'
import GoToToolboxButton from '../components/GoToToolbox'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='absolute left-3 top-3 flex'>
        <HomeIconButton />
        <GoToToolboxButton />
        <GoToEquationsButton />
      </div>
      <div className='absolute right-3 top-3 flex'>
            <ProfileIconDropdownButton />
        </div>
      <div className='mt-7'>
        {children}
      </div>
    </div>
  )
}

export default Layout