import { Link } from "react-router-dom";

import ChannelSidebar from "../components/ChannelSidebar";
import MainSidebar from "../components/MainSidebar";
import Feed from "../components/Feed";

const Dashboard = () => {

    return (
        <div className="container h-screen w-screen">
            <div className="flex">

                {/* Channel Sidebar */}
                <ChannelSidebar />

                {/* Main Sidebar */}
                <MainSidebar />

                {/* Feed */}
                <Feed />
            </div>

        </div>
    )
}


export default Dashboard;