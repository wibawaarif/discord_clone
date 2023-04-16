import NoOnlineFriendsLogo from "../../assets/no_online_friends.svg";
import NoFriendsLogo from "../../assets/pending_users_icon.svg";

const Feed = ({ dashboardMenu, navbarMenu, setNavbarMenu }) => {
  return (
    <div className="bg-[#36393F] w-screen flex flex-col">

        <div className="flex items-center h-[3rem]">
          <div className="flex h-[2rem] border-b-1 px-4">
          <div className="flex items-center pr-4 border-r border-gray-500 border-opacity-30">
          <svg
                className="text-[#8e9297] w-[1.75rem] mr-2 group-hover:text-white"
                aria-hidden="false"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                    transform="translate(2 4)"
                  ></path>
                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
              </svg>

              <p className="text-white font-medium group-hover:text-white">
                Friends
              </p>
          </div>
          </div>

          <button onClick={() => setNavbarMenu('online')} className={`mr-5 rounded-md px-2 hover:text-white hover:bg-[#464a52] ${navbarMenu === 'online' ? 'text-white bg-[#464a52]' : 'text-[#8e9297]'}`}>Online</button>
          <button onClick={() => setNavbarMenu('all')} className={`mr-5 hover:text-white rounded-md px-2 hover:bg-[#464a52] ${navbarMenu === 'all' ? 'text-white bg-[#464a52]' : 'text-[#8e9297]'}`}>All</button>
          <button onClick={() => setNavbarMenu('pending')} className={`mr-5 rounded-md px-2 hover:text-white hover:bg-[#464a52] ${navbarMenu === 'pending' ? 'text-white bg-[#464a52]' : 'text-[#8e9297]'}`}>Pending</button>
          <button onClick={() => setNavbarMenu('blocked')} className={`mr-5 rounded-md px-2 hover:text-white hover:bg-[#464a52] ${navbarMenu === 'blocked' ? 'text-white bg-[#464a52]' : 'text-[#8e9297]'}`}>Blocked</button>
          <button onClick={() => setNavbarMenu('add friend')} className={`rounded-md px-2 font-semibold ${navbarMenu === 'add friend' ? 'bg-[#36393F] text-[#3ba55d]' : 'bg-[#3ba55d] text-white'}`}>Add Friend</button>

        </div>

        <span className="h-[0.5px] w-full bg-slate-950"></span>

        <div className="flex h-[52.4rem]">
          <div className="w-[53rem] border-r border-gray-500 border-opacity-30 flex flex-col justify-center items-center">
          {
              navbarMenu === 'add friend' ? (
                <div className="flex flex-col h-[50rem] w-[38rem]">
                  <p className="font-bold text-xl text-white">ADD FRIEND</p>
                  <p className="text-[#8e9297] mt-3 mb-3">You can add a friend with their Discord tag. It's cAsE sEnSitIvE!</p>
                  <div className="flex group">
                    <input placeholder="Enter a Username#00000" className="focus:outline-none border-2 border-[#2B2E33] focus:border-blue-500 placeholder-[#8e9297] bg-[#2B2E33] w-[26rem] px-3 py-2 rounded-s-lg text-white ring-blue-500 outline-blue-500" />
                    <div className="py-2 bg-[#303339] px-2 rounded-e-lg">
                      <button className="bg-[#4752C4] transition duration-[400ms] hover:bg-[#424bb3] px-6 py-2 text-white rounded-md text-sm">Send Friend Request</button>
                    </div>
                  </div>
                  <div className="flex h-full flex-col justify-center items-center">
                  <img width={480} src={NoFriendsLogo} />
                  <p className="text-[#72767d] text-lg mt-10">Wumpus is waiting on friends. You don't have to though!</p>
                  </div>
                </div>
              ) : (
                <>
                  <img width={480} src={NoOnlineFriendsLogo} />
                  <p className="text-[#72767d] text-lg mt-10">No one's around to play with Wumpus</p>
                </>
              )
            }

          </div>
          <div className="flex flex-col">
            <div className="mt-6">
              <p className="text-white text-2xl font-bold ml-6">Active Now</p>
              <p className="text-white text-2xl font-bold text-center mt-6">It's quiet for now...</p>
              <p className="text-[#8e9297] font-medium text-center">When a friend starts an activity-like playing a game or hanging out on voice-we'll show it here!</p>
              </div>
          </div>
        </div>


    </div>
  )
}

export default Feed;