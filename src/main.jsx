import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import UpdateProfile from './components/Update Profile/UpdateProfile';
import UserProfile from './components/User Profile/UserProfile';
import ErrorPage from './ErrorPage';
import EstateDetail from './components/Estate Detail/EstateDetail';
import Login from './components/auth,login,register/Login';
import Register from './components/auth,login,register/Register';
import AuthProvider from './Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
{
  path:'/',
  element: <Home></Home>,
  loader: ()=> fetch('../public/Estate Data/EstatesData.json')
},
{
  path:'/Update_Profile',
  element:<UpdateProfile></UpdateProfile>,
},
{
  path:'/User_Profile',
  element:<UserProfile></UserProfile>,
},
{
  path:'/Estates/:id',
  element:<EstateDetail></EstateDetail>,
},
{
  path:'/login',
  element:<Login></Login>,
},
{
  path:'/register',
  element:<Register></Register>,
}

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>

  </React.StrictMode>,
)

