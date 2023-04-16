import { Link } from "react-router-dom";
import { useState } from "react";

import ChannelSidebar from "../components/ChannelSidebar";
import MainSidebar from "../components/MainSidebar";
import Feed from "../components/Feed";

const channels = ['algorithms', 'announcements', 'blogging', 'machine-learning', 'blockchain', 'smart-contract', 'web3', 'fullstack-dev', 'showcase', 'help', 'notifications-and-roles']

const Dashboard = () => {
    const [page, setPage] = useState('dashboard');
    const [dashboardMenu, setDashboardMenu] = useState('friends');
    const [navbarMenu, setNavbarMenu] = useState('online');

    return (
        <div className="container h-screen w-screen">
            <div className="flex">

                {/* Channel Sidebar */}
                <ChannelSidebar page={page} setPage={setPage} />

                {/* Main Sidebar */}
                <MainSidebar dashboardMenu={dashboardMenu} setDashboardMenu={setDashboardMenu} channels={channels} page={page} />

                {/* Feed */}
                <Feed navbarMenu={navbarMenu} setNavbarMenu={setNavbarMenu} dashboardMenu={dashboardMenu} />
            </div>

        </div>
    )
}


export default Dashboard;