import { Category } from '@/sanity.types';
import Link from 'next/link';
import React from 'react';

export type CategoryTypeCard = Omit<Category, "description" | "top_contributors" >


const CategoryCard = ({ category }: { category: CategoryTypeCard } ) => {
  return (
    // <div className="card bg-base-100 w-auto md:shadow-md hover:shadow-primary bg-center bg-cover" style={{
    //     backgroundImage: `url(${category.image})`
    // }}>
    //     <div className="card-body text-center">
    //         <p className='italic'>{category.title}</p>
    //         <div className="card-actions justify-center align-middle">
    //             <div className='xl:tooltip xl:tooltip-bottom xl:tooltip-secondary' data-tip={`View ${category.title} Equations`}>
    //                 <button className="btn btn-circle btn-sm bg-transparent border-none shadow-md hover:shadow-secondary hover:bg-transparent hover:scale-110">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
    //                     </svg>
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <li 
        style={{
            backgroundImage: `url(${category.image})`,
            height: 'auto',
            width: 'full'
        }}
        className='equation-card group bg-center bg-cover shadow-md shadow-black'
    >   
        <Link href={`/equations/categories/${category._id}`} className='flex-between justify-self-center text-center'>
            <p className='rounded-full bg-base-100 font-android px-5 py-2 my-2 text-md lg:text-xl md:text-lg shadow-md shadow-black group-hover:shadow-primary transition-all ease-in-out group-hover:shadow-md group-hover:scale-110'>
                {category.title}
            </p>
        </Link>
        
    </li>
  )
}

export default CategoryCard