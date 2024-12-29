import { client } from '@/sanity/lib/client'
import { EQUATION_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client';
import React from 'react';

const EqnView = async ({ id }: { id: string }) => {

    const { views: totalViews } = await client.withConfig({useCdn: false}).fetch(EQUATION_VIEWS_QUERY, {id}); 


    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();

  return (
    <div className='view-container'>
        <p className='view-text'>
            <span className='font-black'>Views: {totalViews}</span>
        </p>
    </div>
  )
}

export default EqnView