import { useSession, signOut, getSession } from "next-auth/react"
import { BsBell, BsTagsFill } from "react-icons/bs"
import { FaWallet } from "react-icons/fa"
import { BiLike } from "react-icons/bi"
import { FiUsers } from "react-icons/fi"
import { VscDashboard } from "react-icons/vsc"
import { AiFillSchedule, AiOutlineSetting } from "react-icons/ai"
import { HiOutlineUserCircle } from "react-icons/hi"
import { useRouter } from "next/router"
import { useState } from "react"
import { CChart } from "@coreui/react-chartjs"

const Dashboard = () => {
  const { data: session } = useSession({ required: true })
  const router = useRouter()
  const [popUp, setPopUp] = useState(false)

  return (
    <div className="min-h-screen flex items-center w-full mx-auto ">
      <div className="flex mx-auto mb-8 lg:mb-0">
        <section className="sm:ml-8 hidden lg:block bg-black text-white w-[280px] my-4 rounded-3xl">
          <div className="w-full h-[94vh] flex flex-col p-8">
            <span className="text-left text-4xl font-extrabold mt-10">
              Board.
            </span>
            <div className="flex flex-col space-y-8 mt-16 shadow-md">
              <div className="flex items-center space-x-4 hover:cursor-pointer hover:opacity-80">
                <VscDashboard size={"24px"} />
                <span className="text-xl font-bold">Dashboard</span>
              </div>
              <div className="flex items-center space-x-4 hover:cursor-pointer hover:opacity-80">
                <BsTagsFill size={"24px"} />
                <span className="text-xl active:font-bold">Transactions</span>
              </div>
              <div className="flex items-center space-x-4 hover:cursor-pointer hover:opacity-80">
                <AiFillSchedule size={"24px"} />
                <span className="text-xl ">Schedules</span>
              </div>
              <div className="flex items-center space-x-4 hover:cursor-pointer hover:opacity-80">
                <HiOutlineUserCircle size={"24px"} />
                <span className="text-xl ">Users</span>
              </div>
              <div className="flex items-center space-x-4 hover:cursor-pointer hover:opacity-80">
                <AiOutlineSetting size={"24px"} />
                <span className="text-xl ">Setting</span>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:w-[85%] flex flex-col w-full mt-4 items-center">
          <header className="flex justify-between items-center w-full px-12">
            <span className="text-xl md:text-2xl lg:text-4xl font-bold">
              Dashboard
            </span>
            <div className="flex justify-center items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white px-4 py-2 rounded-xl hidden lg:block"
              />
              <BsBell className=" h-6 w-6 cursor-pointer" />
              <div className="relative" onClick={() => setPopUp(!popUp)}>
                <img
                  className="w-10 h-10 rounded-full hover:cursor-pointer"
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
                {popUp && (
                  <div className="absolute right-0 top-10 px-4 py-2 bg-black text-white rounded-lg font-bold space-y-2">
                    <button className="w-24 px-2 py-1 hover:opacity-80 border-2 rounded-full">
                      Profile
                    </button>
                    <button
                      onClick={() => router.push("/")}
                      className="w-24 px-2 py-1 hover:opacity-80 border-2 rounded-full"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => signOut()}
                      className="w-24 px-2 py-1 hover:opacity-80 border-2 rounded-full"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>
          <div className="flex flex-wrap justify-center  items-center gap-8 mt-8 ">
            <div className="w-80 bg-green-200 flex flex-col p-6 rounded-2xl">
              <FaWallet className="self-end" size={"24px"} />
              <span className="text-lg">Total Revenues</span>
              <span className="text-4xl font-bold mt-2">$2,129,430</span>
            </div>
            <div className="w-80 bg-amber-100 flex flex-col p-6 rounded-2xl">
              <BsTagsFill className="self-end" size={"24px"} />
              <span className="text-lg">Total Transactions</span>
              <span className="text-4xl font-bold mt-2">1,520</span>
            </div>
            <div className="w-80 bg-red-100 flex flex-col p-6 rounded-2xl">
              <BiLike className="self-end" size={"24px"} />
              <span className="text-lg">Total Likes</span>
              <span className="text-4xl font-bold mt-2">9,721</span>
            </div>
            <div className="w-80 bg-purple-100 flex flex-col p-6 rounded-2xl">
              <FiUsers className="self-end" size={"24px"} />
              <span className="text-lg">Total Users</span>
              <span className="text-4xl font-bold mt-2">430</span>
            </div>
          </div>
          <div className="mt-4 w-auto bg-white p-4 rounded-xl">
            <CChart
              className="w-[400px] sm:w-[600px] md:[800px]"
              type="line"
              data={{
                labels: ["0", "Week 1", "Week 2", "Week 3", "Week 4"],
                datasets: [
                  {
                    label: "Guest",
                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                    borderColor: "#EE8484",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: [200, 390, 210, 300, 220],
                    tension: 0.4,
                  },
                  {
                    label: "User",
                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                    borderColor: "#98D89E",
                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                    pointBorderColor: "#fff",
                    data: [100, 420, 150, 440, 180],
                    tension: 0.4,
                  },
                ],
              }}
            />
          </div>
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-4 mt-4 w-full ">
            <div className="bg-white p-8 px-10 rounded w-[400px] lg:w-[500px]">
              <div className="flex justify-between items-center">
                <p
                  className="text-2xl font-bold
                "
                >
                  Top products
                </p>
                <p className="text-slate-500 text-sm">May-June 2021 </p>
              </div>
              <div className="flex items-center space-x-3">
                <CChart
                  className="w-2/4"
                  type="pie"
                  data={{
                    datasets: [
                      {
                        backgroundColor: ["#EE8484", "#98D89E", "#F6DC7D"],
                        data: [55, 31, 14],
                      },
                    ],
                  }}
                />
                <div className="flex flex-col w-1/3">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-[#EE8484]"></div>
                    <p className="font-bold">Basic Tees</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-[#98D89E]"></div>
                    <p className="font-bold">Custom Short Pants </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-[#F6DC7D]"></div>
                    <p className="font-bold">Super Hoodies</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 px-10 rounded h-full w-[400px] lg:w-[500px] items-center flex justify-center">
              <div className="flex flex-col  ">
                <p className="text-2xl font-bold">Today&apos;s Schedule</p>
                <div className="flex mt-4 space-x-3">
                  <div className="h-18 bg-green-400 w-1"></div>
                  <div className="flex flex-col ">
                    <p className="text-slate-600 font-bold">
                      Meeting with suppliers from kuta bali
                    </p>
                    <p className="text-slate-600">4.00-5.00</p>
                    <p className="text-slate-600">At sunset road, kuta, bali</p>
                  </div>
                </div>

                <div className="flex mt-4 space-x-3">
                  <div className="h-18 bg-green-400 w-1"></div>
                  <div className="flex flex-col ">
                    <p className="text-slate-600 font-bold">
                      Check operation at giga factory-1
                    </p>
                    <p className="text-slate-600">6.00-7.00</p>
                    <p className="text-slate-600">At central jakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context)

//   return {
//     props: { session },
//   }
// }

/*

{session && (
        <div>
          <span>Welcome, {session.user.email}</span>
          <img
            className="w-10 h-10 rounded-full"
            src={session.user.image}
            alt={session.user.name}
          />
        </div>
      )}
      <button
        className="bg-black px-4 py-2 text-white rounded mt-4 ml-4"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      <button
        onClick={() => router.push("/")}
        className="absolute bottom-5 right-5 bg-black text-white py-2 px-4 font-bold rounded-lg hover:opacity-80"
      >
        Back
      </button>

*/
