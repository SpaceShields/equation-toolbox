import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

const UserDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

    if(!user) return notFound();

  return (
    <>
      <section className='w-full justify-items-center'>
        <img
          src={user.image}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full shadow-lg shadow-black"
        />
        <div className='mt-5'>
          <h3 className="text-4xl font-comfortaa text-center">{user.name}</h3>
        </div>
      </section>
    </>
  )
}

export default UserDetailsPage