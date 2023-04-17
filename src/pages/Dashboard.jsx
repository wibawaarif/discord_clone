import { Link } from "react-router-dom";
import { useState } from "react";

import ChannelSidebar from "../components/ChannelSidebar";
import MainSidebar from "../components/MainSidebar";
import Feed from "../components/Feed";

const channels = [
  "algorithms",
  "announcements",
  "blogging",
  "machine-learning",
  "blockchain",
  "smart-contract",
  "web3",
  "fullstack-dev",
  "showcase",
  "help",
  "notifications-and-roles",
  "blogging",
  "machine-learning",
  "blockchain",
  "smart-contract",
  "web3",
  "fullstack-dev",
  "showcase",
  "help",
  "notifications-and-roles",
];

const groupMember = [
  {
    name: "Michael",
    id: "#2341",
    color: "emerald",
  },
  {
    name: "John",
    id: "#3849",
    color: "yellow",
  },
  {
    name: "Jane",
    id: "#9852",
    color: "lime",
  },
  {
    name: "Mary",
    id: "#0284",
    color: "green",
  },
  {
    name: "Kris",
    id: "#1042",
    color: "teal",
  },
  {
    name: "Liz",
    id: "#9348",
    color: "cyan",
  },
  {
    name: "Naruto",
    id: "#9999",
    color: "red",
  },
  {
    name: "Sasukeh",
    id: "#9845",
    color: "red",
  },
  {
    name: "Casie",
    id: "#4859",
    color: "violet",
  },
  {
    name: "SUPARMANZ",
    id: "#1042",
    color: "teal",
  },
  {
    name: "Parjo",
    id: "#9348",
    color: "cyan",
  },
  {
    name: "Cakra",
    id: "#9999",
    color: "red",
  },
  {
    name: "ZZZ",
    id: "#9845",
    color: "red",
  },
  {
    name: "Yolo Man2",
    id: "#4859",
    color: "violet",
  },
];

const Dashboard = () => {
  const [page, setPage] = useState("dashboard");
  const [dashboardMenu, setDashboardMenu] = useState("friends");
  const [navbarMenu, setNavbarMenu] = useState("online");
  const [isMicActive, setIsMicActive] = useState(false);
  const [isSpeakerActive, setIsSpeakerActive] = useState(false);
  const [initialAudio, setInitialAudio] = useState("");

  const mainSideBarProps = {
    page,
    channels,
    setDashboardMenu,
    dashboardMenu,
    isMicActive,
    setIsMicActive,
    isSpeakerActive,
    setIsSpeakerActive,
    initialAudio,
    setInitialAudio,
  };

  return (
    <div className="container h-screen w-screen">
      <div className="flex">
        {/* Channel Sidebar */}
        <ChannelSidebar page={page} setPage={setPage} />

        {/* Main Sidebar */}
        <MainSidebar {...mainSideBarProps} />

        {/* Feed */}
        <Feed
          groupMember={groupMember}
          page={page}
          navbarMenu={navbarMenu}
          setNavbarMenu={setNavbarMenu}
          dashboardMenu={dashboardMenu}
        />
      </div>
    </div>
  );
};

export default Dashboard;
