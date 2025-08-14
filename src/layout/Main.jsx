import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";

const Main = () => {
  const location = useLocation();

  const hideRoutes = ["/login", "/signup"];
  const hideLayout = hideRoutes.includes(location.pathname);
  return (
    <div>
      {!hideLayout && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Main;
