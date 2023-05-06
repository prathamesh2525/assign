import Image from "next/image"
import google from "public/google.svg"
import apple from "public/apple.svg"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  const [popUp, setPopUp] = useState(false)

  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <div className="h-24 lg:w-1/3 lg:h-full flex bg-black items-center text-white">
        <span className="text-4xl lg:text-6xl w-full lg:flex lg:justify-center lg:items-center p-4 lg:p-0 font-bold">
          Board.
        </span>
      </div>
      {session && (
        <div className="h-full lg:w-2/3 p-4 bg-slate-100 flex justify-center items-center relative">
          <div className="cursor-pointer absolute top-[-70px] right-3 text-white lg:text-black lg:top-4 lg:right-4 flex items-center space-x-2">
            <span> Welcome, {session.user.name} </span>
            <img
              onClick={() => setPopUp(!popUp)}
              className="w-10 h-10 rounded-full"
              src={session.user.image}
              alt={session.user.name}
            />
            {popUp && (
              <div className="absolute right-0 top-10 px-4 py-2 bg-black text-white rounded-lg font-bold space-y-2">
                <button
                  onClick={() => signOut()}
                  className="w-24 px-2 py-1 hover:opacity-80 border-2 rounded-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className=" bg-black text-white py-2 px-4 font-bold rounded-lg hover:opacity-80"
          >
            Dashboard
          </button>
        </div>
      )}
      {!session && (
        <div className="h-full lg:w-2/3 p-4 bg-slate-100 flex justify-center items-center">
          <div className="w-[400px] flex flex-col ">
            <span className="text-3xl lg:text-4xl font-bold">Sign In</span>
            <span className="font-medium mt-2">Sign in to your account</span>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center mt-8">
              <div className="rounded-xl bg-white text-slate-400 text-sm px-6 py-1 flex space-x-2 hover:cursor-pointer ">
                <Image className="w-4" src={google} alt="" />
                <button
                  onClick={() => {
                    signIn()
                    router.push("/dashboard")
                  }}
                >
                  Sign in with Google
                </button>
              </div>
              <div className="rounded-xl bg-white text-slate-400 text-sm px-8 py-1 flex space-x-2 hover:cursor-pointer ">
                <Image className="w-4" src={apple} alt="" />
                <span>Sign in with Apple</span>
              </div>
            </div>
            <div className="w-full bg-white mt-8 py-8 px-4 rounded-xl">
              <div className="flex flex-col space-y-1">
                <span>Email address</span>
                <input
                  className="p-2 bg-slate-100"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="flex flex-col space-y-1 mt-3">
                <span>Password</span>
                <input
                  className="p-2 bg-slate-100"
                  type="password"
                  placeholder="************"
                />
              </div>
              <div className="my-4 text-blue-700 hover:cursor-pointer">
                Forget password?
              </div>
              <button
                className="w-full bg-black text-white py-2 font-bold rounded-lg hover:opacity-80"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="text-center mt-4 text-slate-400">
              <span>
                Dont have a account?{" "}
                <span className="text-blue-700 hover:cursor-pointer">
                  Register here
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
