import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import MarkedAndBooked from "../MarkedEstates/MarkedAndBooked";
import { getMarkedEstates } from "../../utilities/LocalStorage.";


const MarkedEstates = () => {
const estates= useLoaderData();
const [MarkedEstates,setMarkedEstates]=useState([]);
useEffect(()=>{
const MarkedEstatesId=getMarkedEstates();
if(estates.length>0){
     const estatesMarked=[];
    for(const id of MarkedEstatesId){
       const estate=estates.find(estate=>estate.id===id);
       if(estate){estatesMarked.push(estate);}
       setMarkedEstates(estatesMarked);
        console.log(estatesMarked);
    }

 } },[])


    return (
        <div>
                <h3 className="text-black text-3xl font-bold text-center py-6 mx-7 rounded-2xl bg-slate-200 ">estates</h3>
<div className="text-center py-10">
<select className="select select-accent text-black font-bold bg-lime-500 bg-opacity-80 max-w-xs ">
<option disabled selected>Sort By</option>
  <option>Rating</option>
  <option>Number of Pages</option>
  <option>Published Year</option>
</select></div>   
<div>

<div className="lg:text-left pl-8">
<NavLink  to='/ListedEstates/BookedEstates'><button className="btn bg-transparent w-44 text-black hover:bg-gray-100 border-0 ">Booked Estates</button></NavLink>
<NavLink to='/ListedEstates/MarkedEstates'><button className="btn bg-transparent w-44 text-black  hover:bg-gray-100 
border-b-4">Marked Estates</button></NavLink>

</div>


     </div>
      <br />        
    {MarkedEstates.map(estate=><MarkedAndBooked key={estate.estateId} estate={estate}></MarkedAndBooked>)
    }       

        </div>
    );
};

export default MarkedEstates;