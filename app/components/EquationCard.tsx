import React from 'react';
import MoreDetailsButton from '../components/MoreDetails';
import EqnRenderInline from './EqnRenderInline';
import { Category, Equation } from '@/sanity.types';

export type EquationTypeCard = Omit<Equation, "history" | "description" | "year_derived" | "category"> & { category?: Category };

const EquationCard = ({ eqn }: { eqn: EquationTypeCard }) => {
  return (
    <li className='equation-card group'>
        <div className='flex-between justify-self-center text-center'>
            <p className='equation-card_name'>{eqn.title}</p>
        </div>
        <div className='flex-between gap-5 justify-self-center'>
            <div className='flex-1'>
                <p className='text-16-medium line-clamp-1 mt-2'>{eqn.category?.title}</p>
            </div>
        </div>
        <div className='flex text-center justify-center mt-3 sm:scale-75 md:scale-90 lg:scale-110 min-w-full'>
            <EqnRenderInline eqn={eqn.tex} />
        </div>
        <div className='flex justify-end p-0 m-0'>
            <MoreDetailsButton id={eqn._id}/>
        </div>
    </li>
  )
}

export default EquationCard