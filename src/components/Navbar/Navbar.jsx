import { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);

const handleLogout=()=>{
  logOut()
  .then()
  .catch()
}

    return (
        <div className="navbar bg-base-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     <li><NavLink to={'/'}>Home</NavLink></li>
     <li><NavLink to="/ListedEstates/BookedEstates">Booked Estates</NavLink></li>
     <li><NavLink to={'/Update_Profile'}>Update Profile</NavLink></li>
     <li><NavLink to={'/User_Profile'}>User Profile</NavLink></li>
      </ul>
    </div>
    <Link to={'/'}><a className="btn btn-ghost text-3xl font-extrabold text-black">Edu.<span className="text-amber-700 ">Rent</span></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to="/ListedEstates/BookedEstates">Booked Estates</NavLink></li>
     <li><NavLink to={'/Update_Profile'}>Update Profile</NavLink></li>
     <li><NavLink to={'/User_Profile'}>User Profile</NavLink></li>
    </ul>
  </div>
  {
user?
<div className="navbar-end">
  <div className="flex space-x-4">
  <div className="avatar">
  <div className="w-12 rounded-full ">
    <img src= {user.photoURL} />
  </div>
</div>  <button onClick={handleLogout} className="btn btn-primary">Logout</button>

  </div>
  </div>
  :<div className="navbar-end">
<Link to={'/Login'}><button className="btn btn-primary">Login</button></Link>
</div>

  }
</div>
    );
};

export default Navbar;