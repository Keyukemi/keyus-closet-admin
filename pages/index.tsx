// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import {FcGoogle} from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession();
  if(session){
    return (
        <div className='bg-primary w-screen h-screen flex items-center'>
        <div className="text-center w-full">
          <button className="bg-secondary text-stroke p-2 px-4 rounded-lg" onClick={()=> signIn()}>
            {/* <FcGoogle size={20}/> */}
            Login with google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      We are logged in
    </div>
  );
}
