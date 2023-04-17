import React from "react";

const DashboardSidebar = React.lazy(() => import('./DashboardSidebar'))
const GroupSidebar = React.lazy(() => import('./GroupSidebar'))

const MainSidebar = (props) => {
  const {
    page,
  } = props;

  return (
    <div className="h-screen bg-[#2F3136] w-[20rem] flex flex-col justify-center items-center">
      {page === "dashboard" ? (
        <React.Suspense fallback={<>Loading...</>}>
          <DashboardSidebar {...props} />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<>Loading...</>}>
          <GroupSidebar {...props} />
        </React.Suspense>
      )}
    </div>
  );
};

export default MainSidebar;
