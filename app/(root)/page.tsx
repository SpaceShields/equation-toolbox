import SignIn from '../components/SignIn'
import { SearchForm } from '../components/SearchForm';
import EquationCard, { EquationTypeCard } from '../components/EquationCard';
import { EQUATIONS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;
  const params = { search: query || null };

  // const equations = await client.fetch(EQUATIONS_QUERY);
  const { data: equations } = await sanityFetch({query: EQUATIONS_QUERY, params});
  // console.log(JSON.stringify(equations, null, 2));

  // const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  // const equations: Equation[] = JSON.parse(eqns);

  const session = await auth();

  return (
    <main>
      <section>
        <div className='justify-self-center justify-center text-center w-full'>
          <h1 className='text-3xl font-comfortaa'> Welcome to the Equation Toolbox!</h1>
          <br />
          <SignIn />
          <br />
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
    </main>
  )
}
