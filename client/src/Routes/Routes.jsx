import {
  createBrowserRouter,
} from "react-router-dom"
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../Pages/Dashboard/AddServices";
import ManageService from "../Pages/Dashboard/ManageService";
import UpdateService from "../Pages/Dashboard/UpdateService";
import Alluser from "../Pages/Dashboard/alluser";
import AdminRoute from "./AdminRoute";
import Book from "../Pages/Dashboard/Book";
import BookingList from "../Pages/Dashboard/BookingList";
import Review from "../Pages/Dashboard/Review";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'addservice',
        element:<AdminRoute><AddServices/></AdminRoute>
      },{
        path:'manageservice',
        element:<AdminRoute><ManageService/></AdminRoute> 
      },{
        path:'updateservice/:id',
        element:<AdminRoute><UpdateService/></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:8000/service/${params.id}`)
      },
      {
        path:'alluser',
        element:<AdminRoute><Alluser/></AdminRoute>
      },{
        path:'book',
        element:<Book></Book>
      },{
        path:'bookinglist',
        element:<BookingList></BookingList>
      },{
        path:'review',
        element:<Review/>
      }
    ]
  }
 
]);