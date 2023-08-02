import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import Signup from "../../Signup/Signup"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Privaterout from "../privaterout/Privaterout"
import DashboardLayout from "../../Layout/DashboardLayout"

 export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/appointment',
            element:<Appointment></Appointment>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
      ]
    },
    {
      path:"/dashboard",
      element: <Privaterout><DashboardLayout></DashboardLayout></Privaterout>,
      children: [
        {
          path: '/dashboard',
          element:<Dashboard></Dashboard>
        }
      ]
    }
])