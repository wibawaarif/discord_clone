import PlusLogo from "../../assets/plus_icon.svg";
import EmptyList from "../../assets/empty_dm_list.svg";
import CloseLogo from "../../assets/close_icon.svg";
import ArrowLogo from "../../assets/arrow.svg";
import OnlineLogo from "../../assets/online.svg";
import MicLogo from "../../assets/microphone.svg";
import HeadphoneLogo from "../../assets/headphone.svg";
import SettingsLogo from "../../assets/settings.svg";

import HashtagLogo from "../../assets/hashtag";
import FriendsLogo from "../../assets/friends";
import NitroLogo from "../../assets/nitro_icon";
import StageLogo from "../../assets/stage_discovery";
import DiscordLogo from "../../assets/discord_logo.jsx";

const MainSidebar = (props) => {
  const {
    page,
    channels,
    dashboardMenu,
    setDashboardMenu,
    isMicActive,
    setIsMicActive,
    isSpeakerActive,
    setIsSpeakerActive,
    groupMenu,
    setGroupMenu
  } = props;

  return (
    <div className="h-screen bg-[#2F3136] w-[20rem] flex flex-col justify-center items-center">
      {page === "dashboard" ? (
        <>
          <div className="w-[14.5rem] h-[2.5rem]">
            <input
              placeholder="Find or start a conversation"
              className="bg-[#202225] w-full py-1 px-2 text-[#dcddde] outline-none rounded-sm placeholder:text-sm"
            />
          </div>

          <span className="h-[0.5px] w-full bg-slate-950"></span>

          <div className="w-[14.5rem] h-[52rem]">
            <div
              onClick={() => setDashboardMenu("friends")}
              className={`flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group ${
                dashboardMenu === "friends" ? "bg-[#393C43]" : ""
              }`}
            >
              {/* Friend svg */}
              <FriendsLogo
                outside={
                  `text-[#8e9297] w-[1.75rem] mr-5 group-hover:text-white ${dashboardMenu === 'friends' ? 'text-white' : 'text-[#8e9297]'}`
                }
              />

              <p
                className={`font-medium group-hover:text-white ${
                  dashboardMenu === "friends" ? "text-white" : "text-[#8e9297]"
                }`}
              >
                Friends
              </p>
            </div>

            <div
              onClick={() => setDashboardMenu("stage discovery")}
              className={`flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group ${
                dashboardMenu === "stage discovery" ? "bg-[#393C43]" : ""
              }`}
            >
              {/* Stage Discovery svg */}
              <StageLogo
                outside={
                  `text-[#8e9297] w-[1.75rem] mr-5 group-hover:text-white ${dashboardMenu === 'stage discovery' ? 'text-white' : 'text-[#8e9297]'}`
                }
              />

              <p
                className={`text-[#8e9297] font-medium group-hover:text-white ${
                  dashboardMenu === "stage discovery"
                    ? "text-white"
                    : "text-[#8e9297]"
                }`}
              >
                Stage Discovery
              </p>
            </div>

            <div
              onClick={() => setDashboardMenu("nitro")}
              className={`flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group ${
                dashboardMenu === "nitro" ? "bg-[#393C43]" : ""
              }`}
            >
              {/* Nitro svg */}
              <NitroLogo
                outside={
                  `text-[#8e9297] w-[1.75rem] mr-5 group-hover:text-white ${dashboardMenu === 'nitro' ? 'text-white' : 'text-[#8e9297]'}`
                }
              />

              <p
                className={`text-[#8e9297] font-medium group-hover:text-white ${
                  dashboardMenu === "nitro" ? "text-white" : "text-[#8e9297]"
                }`}
              >
                Nitro
              </p>
            </div>

            <div className="flex justify-between mt-6 px-2">
              <p className="font-semibold text-[11px] text-white hover:cursor-default">
                DIRECT MESSAGES
              </p>
              <img
                className="hover:cursor-pointer"
                width={18}
                height={18}
                src={PlusLogo}
              />
            </div>
            <img className="mt-6" src={EmptyList} />
          </div>
        </>
      ) : (
        <>
          <div className="w-[14.5rem] h-[52rem] mb-16 overflow-y-scroll scrollbar">
            <div className="flex justify-between px-2 mt-2">
              <p className="text-white font-bold">React Lovers</p>
              <img
                className="hover:cursor-pointer"
                width={20}
                height={20}
                src={CloseLogo}
              />
            </div>

            <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
              <HashtagLogo color={`mr-3 fill-[#8e9297] group-hover:fill-white ${page === 'group-1' && 'fill-white'}`} size={22} />
              <p className={`text-[#8e9297] font-medium group-hover:text-white ${page === 'group-1' && 'text-white'}`}>
                rules
              </p>
            </div>

            <div className="flex mt-6">
              <img className="mr-1" width={12} height={12} src={ArrowLogo} />
              <p className="text-white text-sm font-medium">TEXT CHANNELS</p>
            </div>

            {channels.map((x) => (
              <div onClick={() => setGroupMenu(x)} className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
                <HashtagLogo color={`mr-3 fill-[#8e9297] group-hover:fill-white ${groupMenu === x ? 'fill-white' : ''}`} size={22} />
                <p className={`text-[#8e9297] font-medium group-hover:text-white ${groupMenu === x ? 'text-white' : ''}`}>
                  {x}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {page === "group-1" && (
        <div className="bg-[#292B2F] w-[15.75rem] fixed bottom-0 h-[4rem] flex items-center">
          <div className="flex items-center px-2">
            <DiscordLogo
              height={48}
              width={48}
              outside="rounded-full bg-red-600 hover:cursor-pointer group"
            />
            <img
              className="absolute bottom-3 right-[12.1rem]"
              width={16}
              height={16}
              src={OnlineLogo}
            />

            <div className="flex flex-col ml-3">
              <p className="text-white font-bold">Arif</p>
              <p className="text-[#8e9297] font-medium text-[13px]">#4213</p>
            </div>

            <div className="flex w-[15rem]">
              <div
                onClick={() =>
                  setIsMicActive(value => !value)}
                className="flex justify-center h-[2rem] w-[2rem] rounded-md items-center ml-8 hover:cursor-pointer hover:bg-[#464a52]"
              >
                <img height={22} width={22} src={MicLogo} />
                {isMicActive && (
                  <div className="h-[2px] w-6 bg-red-600 -rotate-45 absolute"></div>
                )}
              </div>

              <div
                onClick={() => setIsSpeakerActive((value) => !value)}
                className="flex justify-center h-[2rem] w-[2rem] rounded-md items-center ml-1 hover:cursor-pointer hover:bg-[#464a52]"
              >
                <img height={22} width={22} src={HeadphoneLogo} />
                {isSpeakerActive && (
                  <div className="h-[2px] w-6 bg-red-600 -rotate-45 absolute"></div>
                )}
              </div>

              <div className="flex justify-center h-[2rem] w-[2rem] rounded-md items-center ml-1 hover:cursor-pointer hover:bg-[#464a52]">
                <img height={20} width={20} src={SettingsLogo} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSidebar;
