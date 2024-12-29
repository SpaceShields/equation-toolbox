import ToolboxForm from '@/app/components/ToolboxForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const CreateToolboxPage = async () => {

  const session = await auth();

  if(!session) redirect('/');

  return (
    <>
      <div className='text-center text-3xl pt-3 font-android'>
        Create New Toolbox
      </div>
      <ToolboxForm />
    </>
  )
}

export default CreateToolboxPage