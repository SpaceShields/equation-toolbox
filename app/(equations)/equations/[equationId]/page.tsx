import React from 'react';
import EqnRender from '@/app/components/EqnRender';
import { client } from '@/sanity/lib/client';
import { EQUATION_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import View from '@/app/components/EqnView';

// export const experimental_ppr = true;

const EquationDetails = async ( { params }: {
    params: Promise<{equationId: string}>;
    }) => {

    const { equationId } = await params;
    var id = equationId;

    const equation = await client.fetch(EQUATION_BY_ID_QUERY, { id });

    if(!equation) return notFound();

  return (
    <>
        <div className='text-center text-2xl lg:text-4xl pt-10 font-comfortaa'>
            {equation.title} ({equation.year_derived})
        </div>
        <div className='text-center text-2xl py-8 px-14 my-5 shadow-md shadow-primary w-fit justify-self-center rounded-2xl'>
            <EqnRender eqn={equation.tex} />
        </div>
        <div className='text-center pt-3 w-3/5 justify-self-center italic'>
            Field of Study: {equation.category.title}
        </div>
        <div className='text-center pt-3 w-3/5 justify-self-center'>
            {equation.description}
        </div>
        {equation.variables ? (
            <>
                <div className='text-center text-2xl pt-10 font-light italic'>Variables</div>
                <table className='table table-xs table-auto border-separate py-10 px-3 w-4/5 justify-self-center shadow-md shadow-primary'>
                <thead>
                    <tr>
                    <th className='text-center'>Variable</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Units</th>
                    <th>Value</th>
                    <th className='text-center'>Constant?</th>
                    </tr>
                </thead>
                <tbody>
                    {equation.variables.map(variable => <tr key={variable._id} className='hover'>
                        <td className='text-center'><EqnRender eqn={variable.tex} /></td>
                        <td>{variable.title}</td>
                        <td>{variable.description}</td>
                        <td>{variable.units}</td>
                        <td>{variable.value}</td>
                        { variable.constant ? (<td className='text-center'>Y</td>): (<td className='text-center'>N</td>) }
                    </tr>)}
                </tbody>
                </table>
            </>
        ) : ( <p className='no-result'>No Variables Listed...</p>)}
        <div className='text-center text-2xl pt-10 font-light italic'>History</div>
        <div className='text-center rounded-2xl py-10 px-3 w-4/5 justify-self-center shadow-md shadow-primary'>
            {equation.history}
        </div>
        <div>
            <View id={id}/>
        </div>
        {/* <hr className='divider' /> */}
    </>
    
  )
}

export default EquationDetails