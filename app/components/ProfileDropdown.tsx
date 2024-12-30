import { signIn, auth, signOut } from '@/auth'
import Link from 'next/link';
import React from 'react'

const ProfileIconDropdownButton = async () => {

    const session = await auth();
    const id = session?.id;
    const user = session?.user;

  return user ? 
  (
    <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-circle avatar hover:bg-transparent">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src={user.image || "https://astronautfoods.com/cdn/shop/articles/Fun_Facts_about_Astronauts.jpg?v=1701451267"} />
            </div>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
                <p>{user.name}</p>
            </li>
            <li>
                <Link href={`/user/${id}`} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </Link>
            </li>
            <li>
                <form
                    action={async () => {
                        "use server";
                        await signOut({redirectTo: '/'});
                    }}
                    >
                    <button className='w-full'>Logout</button>  
                </form>
                
            </li>
        </ul>
        </div>
    </div>
  )
  :
  (
    <>
        <div className='md:tooltip md:tooltip-accent md:tooltip-left' data-tip="Sign In">
            <form
                action={async () => {
                    "use server"
                    await signIn("google", {redirectTo: '/'})
                }}
                >
                <button className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all hover:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
            </form>
        </div>
    </>
  )
}

export default ProfileIconDropdownButton