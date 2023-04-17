import NoOnlineFriendsLogo from "../../assets/no_online_friends.svg";
import NoFriendsLogo from "../../assets/pending_users_icon.svg";
import LupLogo from "../../assets/lup.svg";
import QueenLogo from "../../assets/queen.svg";

import ListFriendsLogo from "../../assets/list_friends";
import PinLogo from "../../assets/pin_icon";
import NotificationLogo from "../../assets/notification";
import QuestionLogo from "../../assets/question_mark_icon.jsx";
import InboxIcon from "../../assets/inbox";
import PlusLogo from "../../assets/plus_icon";
import GiftLogo from "../../assets/gift_box_icon";
import GiftStickerLogo from "../../assets/gif_icon";
import EmojiLogo from "../../assets/emoji_icon";
import DiscordLogo from "../../assets/discord_logo";

import FriendsLogo from "../../assets/friends";

const Feed = ({ page, navbarMenu, setNavbarMenu, groupMember }) => {
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
              <NotificationLogo
                size={24}
                color="fill-[#8e9297] hover:fill-white mr-3 hover:cursor-pointer"
              />
              <PinLogo
                size={24}
                color="fill-[#8e9297] hover:fill-white mr-3 hover:cursor-pointer"
              />
              <ListFriendsLogo
                size={24}
                color="fill-[#8e9297] hover:fill-white mr-3 hover:cursor-pointer"
              />

              <div className="w-[20.8rem] h-[3rem] flex items-center">
                <div className="flex bg-[#202225] w-[13rem]">
                  <input
                    placeholder="Search"
                    className="px-2 py-1 outline-none text-sm bg-[#202225] rounded-sm text-white"
                  />
                  <img
                    className="hover:cursor-pointer"
                    width={25}
                    height={25}
                    src={LupLogo}
                  />
                </div>
                <div className="flex ml-7 w-[4.5rem] justify-between">
                  <InboxIcon
                    size={24}
                    color="fill-[#8e9297] hover:fill-white hover:cursor-pointer"
                  />
                  <QuestionLogo
                    size={24}
                    color="fill-[#8e9297] hover:fill-white hover:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <span className="h-[0.5px] w-full bg-slate-950"></span>

          <div className="flex flex-row">
            <div className="w-[55rem] h-[52.45rem] flex justify-center overflow-y-scroll scrollbar">
              <div className="w-[50rem] h-[200rem] flex flex-col justify-between mb-[15rem]">
                <div className="flex justify-end mt-16">
                  <button className="bg-[#5865F2] hover:cursor-default text-white transition duration-[400ms] hover:bg-[#7983F5] hover:shadow-xl rounded-lg px-16 py-4 mr-4">
                    <div className="flex items-center">
                      <span className="text-xl">Hello, how are you?</span>
                    </div>
                  </button>
                </div>

                <div>
                  <button className="bg-[#5865F2] hover:cursor-default text-white transition duration-[400ms] hover:bg-[#7983F5] hover:shadow-xl rounded-lg px-16 py-4 mr-4">
                    <div className="flex items-center">
                      <span className="text-xl">I'am good, thanks!</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex rounded-lg flex-row items-center bg-[#41444B] fixed bottom-5 px-5">
                <PlusLogo
                  size={26}
                  color="fill-[#41444B] bg-[#8e9297] rounded-full px-[2px] py-[2px] hover:cursor-pointer hover:bg-white"
                />
                <input
                  autoFocus
                  placeholder="Message #undefined"
                  className="placeholder-[#8e9297] w-[40rem] bg-[#41444B] py-3 px-4 text-white outline-none"
                />
                <GiftLogo
                  size={33}
                  color="text-[#8e9297] rounded-full px-1 py-1 hover:cursor-pointer hover:text-white mr-3"
                />
                <GiftStickerLogo
                  size={33}
                  color="text-[#8e9297] px-1 py-1 hover:cursor-pointer hover:text-white mr-3"
                />
                <EmojiLogo
                  size={33}
                  color="text-[#8e9297] px-1 py-1 hover:cursor-pointer hover:text-white"
                />
              </div>
            </div>

            <div className="w-[20.8rem] h-[52.45rem] overflow-y-scroll scrollbar">

              <div className="px-3 py-4">
                <p className="font-medium text-[#8e9297] pl-2">ONLINE-3</p>
                {
                groupMember.map((member, index) => {
                  return (
                    <div key={index} className="flex items-center py-2 px-2 rounded-lg hover:cursor-pointer hover:bg-[#393C43]">
                    <DiscordLogo
                  height={48}
                  width={48}
                  outside={`rounded-full bg-${member.color}-600 hover:cursor-pointer group`}
                />
                <div className="flex flex-col ml-3">
                    <p className="text-white font-bold">{member.name}</p>
                    <p className="text-[#8e9297] font-medium text-[13px]">{member.id}</p>
                </div>
                {
                  index === 0 && <img className="ml-3 mb-[1.2rem]" width={20} height={20} src={QueenLogo} />
                }
                </div>
                  )
                })
              }



              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
