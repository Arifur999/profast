import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";


const router = createBrowserRouter([
  {
    path: "/",
Component:RootLayout,
children:[
    {
        index:true,
        Component:Home,
    },
    {
      path:"/coverage",
      Component:Coverage,
    },
    {
      path:"/parcel",
      Component:SendParcel,
    },
]
  },
  {
    path:"/",
    Component:AuthLayout,
children:[
  {
    path:"/login",
    Component:Login,
  },
  {
    path:"/register",
    Component:Register,
  }
]
    
  }
]);
export default router;