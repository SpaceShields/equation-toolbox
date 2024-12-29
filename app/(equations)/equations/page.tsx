import React from 'react'
import { promises as fs } from 'fs';
import EqnRender from '../../components/EqnRender';
import MoreDetailsButton from '../../components/MoreDetails';

interface Variable {
    id: number;
    name: string;
    description: string;
    latex_variable: string;
    value: string;
    units: string;
}

interface Equation {
    id: number;
    name: string;
    description: string;
    latex_equation: string;
    category: string;
    variables: Variable[];
}

const EquationsPage = async () => {
    
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data: Equation[] = JSON.parse(file);
    // console.log(data);

    var fieldsOfStudy: string[] = [];

    data.forEach( (equation) => {
        if(!fieldsOfStudy.includes(equation.category)) {
            fieldsOfStudy.push(equation.category);
        }
    });

    fieldsOfStudy = fieldsOfStudy.sort();

    return (
    <>
        <div className='text-center text-3xl py-3 font-android'>Fields of Study</div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4 w-11/12 h-auto mx-auto rounded-md'>
            <div className="card bg-base-100 w-auto md:shadow-md hover:shadow-primary" key='999' >
                <div className="card-body text-center">
                    <p className='italic'>All Equations</p>
                    <div className="card-actions justify-center align-middle">
                        <button className="btn btn-circle btn-sm bg-transparent border-none shadow-md hover:shadow-secondary hover:bg-transparent hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {fieldsOfStudy.map(category =>
                <div className="card bg-base-100 w-auto md:shadow-md hover:shadow-primary" key={fieldsOfStudy.indexOf(category)}>
                    <div className="card-body text-center">
                        <p className='italic'>{category}</p>
                        <div className="card-actions justify-center align-middle">
                            <div className='xl:tooltip xl:tooltip-bottom xl:tooltip-secondary' data-tip={`View ${category} Equations`}>
                                <button className="btn btn-circle btn-sm bg-transparent border-none shadow-md hover:shadow-secondary hover:bg-transparent hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <br />

        <div className='text-center text-2xl py-3 font-extrabold'>All Equations</div>
        <div className='overflow-x-auto rounded-lg h-96 pb-10 px-3 w-11/12 justify-self-center shadow-md shadow-primary'>
            <table className='table table-pin-rows'>
            <thead className='bg-transparent pt-6'>
                <tr>
                <th>Name</th>
                {/* <th>Description</th> */}
                <th className='text-center'>Field of Study</th>
                {/* <th>LaTeX</th> */}
                <th className='text-center'>Equation</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(equation => <tr key={equation.id} className='hover'>
                <td>{equation.name}</td>
                {/* <td>{equation.description}</td> */}
                <td className='text-center'>{equation.category}</td>
                {/* <td>{equation.latex_equation}</td> */}
                <td><EqnRender eqn={equation.latex_equation} /></td>
                <td><MoreDetailsButton eqn={equation}/></td></tr>)}
            </tbody>
            </table>
        </div>
    </>
    )
}

export default EquationsPage