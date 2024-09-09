import { NavLink, Outlet } from "react-router-dom";
import MarkedEstates from "../MarkedEstates/MarkedEstates";
import BookedEstates from "../BookedEstates/BookedEstates";

const ListedEstates = () => {
    return (
        <div>
            <h3 className="text-black text-3xl font-bold text-center py-6 mx-7 rounded-2xl bg-slate-200 ">Estates</h3>
<div className="text-center py-10">
<select className="select select-accent text-black font-bold bg-lime-500 bg-opacity-80 max-w-xs ">
<option disabled selected>Sort By</option>
  <option>Rating</option>
  <option>Number of Pages</option>
  <option>Published Year</option>
</select></div>        

     <div>

<NavLink to='/ListedEstates/BookedEstates'>Booked Estates</NavLink>
<NavLink to='/ListedEstates/MarkedEstates'>Marked Estates</NavLink>


     </div>

        
        
        
        </div>
    );
};

export default ListedEstates;