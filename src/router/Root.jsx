import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Root;
