import React from 'react';
import { client } from '@/sanity/lib/client';
import { TOOLBOX_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import TBView from '@/app/components/TBView';
import Link from 'next/link';
import { auth } from '@/auth';

// export const experimental_ppr = true;

const ToolboxDetailsPage = async ( { params }: {
    params: Promise<{id: string}>;
    }) => {

    const { id } = await params;
    // console.log(id);

    const session = await auth();
    const userId = session?.id;

    const toolbox = await client.fetch(TOOLBOX_BY_ID_QUERY, { id });

    if(!toolbox) return notFound();

  return (
    <>
        <div className='text-center text-3xl pt-5 font-android'>
            {toolbox.title} Toolbox
        </div>
        {/* <div className='text-center text-md py-1 font-comfortaa'>Created by: {toolbox.author.name}</div> */}
        <Link
              href={`/user/${toolbox.author?._id}`}
              className="flex gap-2 items-center my-3 justify-self-center"
            >
              <img
                src={toolbox.author.image}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-sm font-comfortaa">{toolbox.author.name}</p>
              </div>
            </Link>
        <img
          src={toolbox.image}
          alt="cover photo"
          className="w-3/5 justify-self-center h-auto rounded-xl shadow-md shadow-black"
        />
        <div className='text-center text-md md:text-lg lg:text-xl font-comfortaa pt-3 w-3/5 justify-self-center'>
            {toolbox.description}
        </div>

        {toolbox.equations == null && toolbox.author._id == userId ? 
            <div className='justify-self-center mt-3'>
                <Link href='/equations'>
                    <button className='btn btn-primary rounded-full shadow-inner shadow-black hover:shadow-md hover:shadow-black'>Add Equations</button>
                </Link>
            </div> 
            : 
            <></>
        }

        {/* <div className='text-center text-2xl pt-10 font-light italic'>Variables</div>
        <table className='table table-xs table-auto border-separate py-10 px-3 w-4/5 justify-self-center shadow-md shadow-primary'>
        <thead>
            <tr>
            <th>Variable</th>
            <th>Name</th>
            <th>Description</th>
            
            <th>Value</th>
            <th>Units</th>
            </tr>
        </thead>
        <tbody>
            {variables.map(variable => <tr key={variable.id} className='hover'>
                <td><EqnRender eqn={variable.latex_variable} /></td>
                <td>{variable.name}</td>
                <td>{variable.description}</td>
                <td>{variable.value}</td>
                <td>{variable.units}</td>
            </tr>)}
        </tbody>
        </table> */}
        <div>
            <TBView id={id}/>
        </div>
        {/* <hr className='divider' /> */}
    </>
    
  )
}

export default ToolboxDetailsPage