import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../component/authentication/Login";
import Signup from "../component/authentication/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      }
    ]
  },
]);
export default router;
