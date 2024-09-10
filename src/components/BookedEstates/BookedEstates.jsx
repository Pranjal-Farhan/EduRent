import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import MarkedAndBooked from "../MarkedEstates/MarkedAndBooked";
import { getBookedEstates } from "../../utilities/LocalStorage.";


const BookedEstates = () => {
const estates= useLoaderData();
const [BookedEstates,setBookedEstates]=useState([]);
    useEffect(()=>{
    const BookedEstatesId=getBookedEstates();
    if(estates.length>0){
         const estatesBooked=[];
        for(const id of BookedEstatesId){
           const estate=estates.find(estate=>estate.id===id);
           if(estate){estatesBooked.push(estate);}
           setBookedEstates(estatesBooked);
            console.log(estatesBooked);
        }
    
     } },[])



    return (
        <div>
            <h3 className="text-black text-3xl font-bold text-center py-6 mx-7 rounded-2xl bg-slate-200 ">estates</h3>
<div className="text-center py-10">
<select className="select select-accent text-black font-bold bg-lime-500 bg-opacity-80 max-w-xs ">
<option disabled selected>Sort By</option>
  <option>Rent</option>
  <option>Availability</option>
  <option>Facilities</option>
</select></div> 


<div className="lg:text-left pl-8">
<NavLink  to='/ListedEstates/BookedEstates'><button className="btn bg-transparent w-44 text-black hover:bg-gray-100 border-b-4 ">Booked Estates</button></NavLink>
<NavLink to='/ListedEstates/MarkedEstates'><button className="btn bg-transparent w-44 text-black  hover:bg-gray-100 border-0">Marked Estates</button></NavLink>
</div>




<div>
<br />
{BookedEstates.map(estate=><MarkedAndBooked key={estate.estateId} estate={estate}></MarkedAndBooked>)
    }  
</div>


        </div>
    );
};

export default BookedEstates;