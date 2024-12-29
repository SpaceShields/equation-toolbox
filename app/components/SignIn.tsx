
import { auth, signIn, signOut } from "@/auth"
 
export default async function SignIn() {

    const session = await auth();
    // console.log(session);
    const user = session?.user;

  return user ? (
    <>
        <h1 className="text-2xl font-comfortaa">{user?.name}</h1>
    </>
  )
  :
  (
    <>
        <h1 className="text-2xl font-comfortaa">You are not authenticated.</h1>
        <h1 className="text-md italic font-comfortaa">Click the top right icon to sign in.</h1>
    </>
  )
} 