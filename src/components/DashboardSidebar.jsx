import PlusLogo from "../../assets/plus_icon.svg";
import EmptyList from "../../assets/empty_dm_list.svg";

import FriendsLogo from "../../assets/friends";
import NitroLogo from "../../assets/nitro_icon";
import StageLogo from "../../assets/stage_discovery";
const DashboardSidebar = (props) => {
    const {
        dashboardMenu,
        setDashboardMenu,
      } = props;

  return (
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
  )
}

export default DashboardSidebar