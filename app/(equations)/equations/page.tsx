import React from 'react'
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { EQUATIONS_QUERY } from '@/sanity/lib/queries';
import { SearchForm } from '@/app/components/SearchForm';
import EquationCard, { EquationTypeCard } from '@/app/components/EquationCard';


const EquationsPage = async ({ searchParams }: {
    searchParams: Promise<{query?: string}>
  }) => {

    const query = (await searchParams).query;
    const params = { search: query || null };
    const { data: equations } = await sanityFetch({query: EQUATIONS_QUERY, params});

    var fieldsOfStudy: string[] = [];

    equations.forEach( (equation) => {
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

        <section>
        <div className='justify-self-center justify-center text-center w-full'>
          <SearchForm query={query}/>
        </div>
      </section>
      <section className='section-container'>
        <p className='text-30-semibold justify-self-center pt-9'>
          {query ? `Search Results for ${query}` : "All Equations"}
        </p>
        <ul className='mt-7 card_grid'>
          {equations?.length > 0 ? (
            equations.map((equation: EquationTypeCard, index: number) => (
              <EquationCard key={equation._id} eqn={equation}/>
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

export default EquationsPage