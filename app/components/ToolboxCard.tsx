import React from 'react';
import MoreDetailsButton from '../components/MoreDetails';
import { Author, Toolbox } from '@/sanity.types';
import Link from 'next/link';

export type ToolboxTypeCard = Omit<Toolbox, "equations" | "description" | "author"> & { author?: Author };

const ToolboxCard = ({ toolbox }: { toolbox: ToolboxTypeCard }) => {
  return (
    <li 
        style={{
            backgroundImage: `url(${toolbox.image})`,
            height: 'auto',
            width: 'full'
        }}
        className='equation-card group bg-center bg-cover bg-blend-overlay'
    >
        {/* <img 
            src={toolbox.image}
            alt="cover photo"
            className='w-auto h-16 overflow-y-hidden z-0'
        /> */}
        
        <Link
            href={`/user/${toolbox.author?._id}`}
            className="flex gap-2 items-center p-2 mb-1 justify-self-center rounded-full bg-base-100 shadow-inner shadow-black"
        >
            <img
            src={toolbox.author?.image}
            alt="avatar"
            width={28}
            height={28}
            className="rounded-full drop-shadow-lg"
            />

            <div>
                <p className="text-xs font-comfortaa">{toolbox.author?.name}</p>
            </div>
        </Link>
        <Link href={`/toolboxes/${toolbox._id}`} className='flex-between justify-self-center text-center'>
            <p className='rounded-full bg-base-100 font-android px-5 py-2 my-2 text-lg lg:text-2xl md:text-xl shadow-md shadow-black group-hover:shadow-primary transition-all ease-in-out group-hover:shadow-md group-hover:scale-125'>
                {toolbox.title}
            </p>
        </Link>
        <div className='flex justify-end p-0 m-0'>
            {/* <MoreDetailsButton id={eqn._id}/> */}
        </div>
        <div className='flex bg-base-100 justify-start w-fit p-2 m-0 rounded-full shadow-inner shadow-black'>
            <p>Views: {toolbox.views}</p>
        </div>
    </li>
  )
}

export default ToolboxCard