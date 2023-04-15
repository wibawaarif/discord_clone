import { Link } from "react-router-dom";
import { useState } from "react";

import ChannelSidebar from "../components/ChannelSidebar";
import MainSidebar from "../components/MainSidebar";
import Feed from "../components/Feed";

const Dashboard = () => {
    const [page, setPage] = useState('')

    const checkCurrentPage = (page) => {
        if (page === 'dashboard') {
            setPage('dashboard')
        }

        if (page === 'group-1') {
            setPage('group-1')
        }
     }

    return (
        <div className="container h-screen w-screen">
            <div className="flex">

                {/* Channel Sidebar */}
                <ChannelSidebar page={page} setPage={setPage} />

                {/* Main Sidebar */}
                <MainSidebar page={page} />

                {/* Feed */}
                <Feed />
            </div>

        </div>
    )
}


export default Dashboard;