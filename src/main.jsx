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
import MarkedEstates from './components/MarkedEstates/MarkedEstates';
import BookedEstates from './components/BookedEstates/BookedEstates';
import PrivateRoute from './components/privateRoute/privateRoute';

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
  path:'/ListedEstates/MarkedEstates',
  element: <PrivateRoute><MarkedEstates></MarkedEstates></PrivateRoute>,
  loader: ()=> fetch('../public/Estate Data/EstatesData.json')
},
{
  path:'/ListedEstates/BookedEstates',
  element:<PrivateRoute><BookedEstates></BookedEstates></PrivateRoute>,
  loader: ()=> fetch('../public/Estate Data/EstatesData.json')

},
{
  path:'/Update_Profile',
  element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
},
{
  path:'/User_Profile',
  element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
},
{
  path:'/Estates/:id',
  element:<PrivateRoute><EstateDetail></EstateDetail></PrivateRoute>,
  loader: ()=> fetch('../public/Estate Data/EstatesData.json')

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

