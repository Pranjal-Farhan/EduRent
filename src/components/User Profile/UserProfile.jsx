import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
    const {user}=useContext(AuthContext);
console.log(user);
    return (
        <div className="px-60 mb-20 mt-10 flex space-x-56 center">
<div>    <img className="w-40 rounded-lg " src= {user.photoURL} />
</div>
    <div className="space-y-4">
    <div><span className="font-bold text-slate-950 text-xl">Name: </span><span className="text-lg text-slate-800"> {user.displayName}</span></div>
    <div><span className="font-bold text-slate-950 text-xl">Email:</span><span className="text-lg text-slate-800"> {user.email}</span></div>
    <div><span className="font-bold text-slate-950 text-xl">Account Created:</span><span className="text-lg text-slate-800"> {user.metadata.creationTime}</span></div>
    <div><span className="font-bold text-slate-950 text-xl">Last Login: </span><span className="text-lg text-slate-800"> {user.metadata.lastSignInTime}</span></div>
    
    <div className="space-x-10">
   <button className="btn btn-active btn-primary"><NavLink to={'/ListedEstates/MarkedEstates'}>See Your Marked Estates</NavLink></button>
    <button className="btn btn-active btn-accent"><NavLink to={'/ListedEstates/BookedEstates'}>See Your Booked Estates</NavLink></button>

   </div>
    </div>

        </div>
        
        
    );
};

export default UserProfile;