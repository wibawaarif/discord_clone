import NoOnlineFriendsLogo from "../../assets/no_online_friends.svg";
import NoFriendsLogo from "../../assets/pending_users_icon.svg";
import NotificationLogo from "../../assets/notification.svg";
import PinLogo from "../../assets/pin_icon.svg";
import ListFriendsLogo from "../../assets/list_friends.svg";

import FriendsLogo from "../../assets/friends";

const Feed = ({ page, navbarMenu, setNavbarMenu }) => {
  console.log(page);
  return (
    <div className="bg-[#36393F] w-screen flex flex-col">
      {page === "dashboard" ? (
        <>
          {/* dashboard section */}
          <div className="flex items-center h-[3rem]">
            <div className="flex h-[2rem] border-b-1 px-4">
              <div className="flex items-center pr-4 border-r border-gray-500 border-opacity-30">
                <FriendsLogo
                  outside={
                    "text-[#8e9297] w-[1.75rem] mr-2 group-hover:text-white"
                  }
                />
                <p className="text-white font-medium group-hover:text-white">
                  Friends
                </p>
              </div>
            </div>

            <button
              onClick={() => setNavbarMenu("online")}
              className={`mr-5 rounded-md px-2 hover:text-white hover:bg-[#464a52] ${
                navbarMenu === "online"
                  ? "text-white bg-[#464a52]"
                  : "text-[#8e9297]"
              }`}
            >
              Online
            </button>
            <button
              onClick={() => setNavbarMenu("all")}
              className={`mr-5 hover:text-white rounded-md px-2 hover:bg-[#464a52] ${
                navbarMenu === "all"
                  ? "text-white bg-[#464a52]"
                  : "text-[#8e9297]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setNavbarMenu("pending")}
              className={`mr-5 rounded-md px-2 hover:text-white hover:bg-[#464a52] ${
                navbarMenu === "pending"
                  ? "text-white bg-[#464a52]"
                  : "text-[#8e9297]"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setNavbarMenu("blocked")}
              className={`mr-5 rounded-md px-2 hover:text-white hover:bg-[#464a52] ${
                navbarMenu === "blocked"
                  ? "text-white bg-[#464a52]"
                  : "text-[#8e9297]"
              }`}
            >
              Blocked
            </button>
            <button
              onClick={() => setNavbarMenu("add friend")}
              className={`rounded-md px-2 font-semibold ${
                navbarMenu === "add friend"
                  ? "bg-[#36393F] text-[#3ba55d]"
                  : "bg-[#3ba55d] text-white"
              }`}
            >
              Add Friend
            </button>
          </div>

          <span className="h-[0.5px] w-full bg-slate-950"></span>

          <div className="flex h-[52.4rem]">
            <div className="w-[53rem] border-r border-gray-500 border-opacity-30 flex flex-col justify-center items-center">
              {navbarMenu === "add friend" ? (
                <div className="flex flex-col h-[50rem] w-[38rem]">
                  <p className="font-bold text-xl text-white">ADD FRIEND</p>
                  <p className="text-[#8e9297] mt-3 mb-3">
                    You can add a friend with their Discord tag. It's cAsE
                    sEnSitIvE!
                  </p>
                  <div className="flex group">
                    <input
                      placeholder="Enter a Username#00000"
                      className="focus:outline-none border-2 border-[#2B2E33] focus:border-blue-500 placeholder-[#8e9297] bg-[#2B2E33] w-[26rem] px-3 py-2 rounded-s-lg text-white ring-blue-500 outline-blue-500"
                    />
                    <div className="py-2 bg-[#303339] px-2 rounded-e-lg">
                      <button className="bg-[#4752C4] transition duration-[400ms] hover:bg-[#424bb3] px-6 py-2 text-white rounded-md text-sm">
                        Send Friend Request
                      </button>
                    </div>
                  </div>
                  <div className="flex h-full flex-col justify-center items-center">
                    <img width={480} src={NoFriendsLogo} />
                    <p className="text-[#72767d] text-lg mt-10">
                      Wumpus is waiting on friends. You don't have to though!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <img width={480} src={NoOnlineFriendsLogo} />
                  <p className="text-[#72767d] text-lg mt-10">
                    No one's around to play with Wumpus
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col">
              <div className="mt-6">
                <p className="text-white text-2xl font-bold ml-6">Active Now</p>
                <p className="text-white text-2xl font-bold text-center mt-6">
                  It's quiet for now...
                </p>
                <p className="text-[#8e9297] font-medium text-center">
                  When a friend starts an activity-like playing a game or
                  hanging out on voice-we'll show it here!
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col">

          <div className="flex items-center justify-between w-[75.8rem] h-[3rem]">

            <div className="flex items-center ml-4">
              <p className="text-[#8e9297] text-4xl mr-4">#</p>
              <p className="text-lg text-white font-medium">Javascript</p>
            </div>

            <div className="flex items-center">
                <img className="mr-3" width={24} height={24} src={NotificationLogo} />
                <img  className="mr-3" width={24} height={24} src={PinLogo} />
                <img className="mr-3" width={24} height={24} src={ListFriendsLogo} />
                
                <div className="bg-white w-[22.8rem] h-[3rem]">
                  <div>

                  </div>

                  

                </div>
            </div>

          </div>

          <span className="h-[0.5px] w-full bg-slate-950"></span>

          <div className="flex flex-row">
              <div className="w-[53rem] h-[52.45rem]">

              </div>

              <div className="w-[22.8rem] bg-teal-800 h-[52.45rem]"></div>

          </div>

          
        </div>
      )}
    </div>
  );
};

export default Feed;
