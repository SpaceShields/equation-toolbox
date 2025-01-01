import React from 'react'
import Link from 'next/link'
import ProfileIconDropdownButton from './ProfileDropdown'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className="btn btn-md btn-ghost text-lg"><Link href={'/'}>Equation Toolbox</Link></div>
                <div className="px-3 hover:underline hover:text-primary"><Link href="/equations">Equations</Link></div>
                <div className="px-3 hover:underline hover:text-primary"><Link href="/toolboxes">Toolboxes</Link></div>
            </div>
            <div className="flex-none mt-1 mr-1">
                {/* <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div> */}
                <ProfileIconDropdownButton />
            </div>
            </div>
    </div>
  )
}

export default Navbar