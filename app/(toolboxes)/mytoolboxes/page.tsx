import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';

const MyToolboxesPage = async () => {

  const session = await auth();
  if(!session) return redirect('/')

  return (
    <div className='text-center text-2xl py-3 font-extrabold'>My Toolboxes</div>
  )
}

export default MyToolboxesPage