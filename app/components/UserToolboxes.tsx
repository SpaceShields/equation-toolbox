import { client } from '@/sanity/lib/client'
import { TOOLBOX_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import ToolboxCard, { ToolboxTypeCard } from './ToolboxCard';

const UserToolboxes = async ({ id }: { id: string }) => {
    const toolboxes = await client.fetch(TOOLBOX_BY_AUTHOR_QUERY, { id });
    // console.log(toolboxes);
  return (
    <>
        { toolboxes.length > 0 ? (toolboxes.map((toolbox: ToolboxTypeCard) => (
            <ToolboxCard key={toolbox._id} toolbox={toolbox} />
            ))
        ) 
        :
        (
            <p className='no-result'>No toolboxes yet</p>
        )}
    </>

  )
}

export default UserToolboxes