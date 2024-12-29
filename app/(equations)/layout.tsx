import React from 'react'
import HomeIconButton from '../components/HomeIcon'
import GoToToolboxButton from '../components/GoToToolbox'
import ProfileIconDropdownButton from '../components/ProfileDropdown'
import GoToEquationsButton from '../components/GoToEquations'

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
        <div className='mt-16'>
          {children}
        </div>
    </div>
  )
}

export default Layout