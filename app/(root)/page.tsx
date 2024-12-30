import SignIn from '../components/SignIn'
import { auth } from '@/auth';

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) {

  const session = await auth();

  return (
    <main>
      <section>
        <div className='justify-self-center justify-center text-center w-full'>
          <h1 className='text-3xl font-comfortaa'> Welcome to the Equation Toolbox!</h1>
          <br />
          <SignIn />
        </div>
      </section>
    </main>
  )
}
