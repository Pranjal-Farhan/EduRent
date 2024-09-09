import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { TbBrandPagekit } from "react-icons/tb";
import { Link } from "react-router-dom";

const MarkedAndBooked = ({estate}) => {

const {id,location,area,image,Rent,facilities,title,visit,status,Rentfrom}=estate;


    return (
       <div className="pb-6 mx-5">
         <div className="lg:flex border-2  rounded-3xl">
<div className="lg:w-60 sm:w-16 p-8 bg-slate-200 m-10 rounded-3xl">
<img src={image} alt=""  />
</div>
<div className="pt-16">
<h2 className="text-black font-bold pl-6 lg:text-3xl sm:text-sm pb-2">{title}</h2>
<h4 className="text-black lg:text-lg pl-6 sm:text-xs ">Location: {location}</h4>
<div className="lg:flex space-x-3 text-[#23BE0A] font-semibold pt-4 pb-2">
    <div className="text-black pt-1 pl-5 pb-2 font-bold ">Facilities</div>
    <div className="bg-lime-200 w-40 px-3 py-1 lg:mb-0 sm:mb-2  rounded-2xl bg-opacity-20 ">{facilities[0]}</div>
    <div className="bg-lime-200 w-40 px-3 py-1  rounded-2xl bg-opacity-20">{facilities[1]}</div>
    <div className="flex pl-3 pt-1 text-black">
        <div className="pt-1">    <IoLocationOutline /></div>
    <h4>Rent: {Rent}</h4>
</div>
</div>

<div className="flex pl-6 lg:space-x-10">
    <div className="flex">
<div className="pt-1 pr-2"><GoPeople /></div>
        <h3>Area: {area}</h3></div>
    <div className="flex">
        <div className="pt-1 pr-2">    <TbBrandPagekit /></div>
    <h3>Visit Date: {visit}</h3></div>
</div>

    <div className="lg:flex text-center space-x-9 pt-5">
        <div className="badge bg-sky-200 text-sky-400 bg-opacity-50 badge-outline p-4">Status: {status}</div>
        <div className="badge bg-orange-400 text-orange-600 bg-opacity-50 badge-outline p-4">Rent From: {Rentfrom}</div>
       <div className="lg:-mt-2 mt-6 pb-3" > <Link to={`/book/${id}`}>   
<button className="btn btn-primary bg-green-400 rounded-3xl">View Details</button>
</Link></div>
    </div>
    




</div>




        </div>
       </div>
    );
};

export default MarkedAndBooked;