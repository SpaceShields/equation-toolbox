import ToolboxCard, { ToolboxTypeCard } from '@/app/components/ToolboxCard';
import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { TOOLBOX_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const ToolboxesPage = async () => {

    const session = await auth();
    const id = session?.id;

    const { data: toolboxes } = await sanityFetch({query: TOOLBOX_QUERY});
    
    if(!toolboxes) return notFound();

  return (
    <>    
        <div className='text-center text-3xl py-3 font-android'>Toolboxes</div>
        <div className='justify-self-center'>
            {id == null ? <p className='italic'>Sign in to create a toolbox</p> : 
                (<Link href='/toolboxes/create'>
                    <button className='btn btn-secondary rounded-xl'>Create New Toolbox</button>
                </Link>
            )}
        </div>
        <section className='section-container'>
        {/* <p className='text-30-semibold justify-self-center pt-9'>
          {query ? `Search Results for ${query}` : "All Equations"}
        </p> */}
        <ul className='mt-7 card_grid max-w-7xl w-full justify-self-center'>
          {toolboxes?.length > 0 ? (
            toolboxes.map((toolbox: ToolboxTypeCard, index: number) => (
              <ToolboxCard key={toolbox._id} toolbox={toolbox}/>
            ))
          ) : (
            <p className='no-result'>No equations found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>

  )
}

export default ToolboxesPage