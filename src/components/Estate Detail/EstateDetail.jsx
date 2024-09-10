import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleMapReact from 'google-map-react';

import { getBookedEstates,saveBookedEstates,getMarkedEstates,saveMarkedEstates } from "../../utilities/LocalStorage.";

const EstateDetail = () => {

    const estates=useLoaderData();
    const {id}=useParams();
    const estate=estates.find(estate=>estate.id===id);
    const {title,SingleOrMess,description,Rent,status,Rentfrom,area,details,location,facilities,image}=estate;
   const estate_title=  title;
    document.estate_title=estate_title
    let clickedBook=false;
    let clickedMark=false;
    function handleBooked(){
        if(!clickedBook){toast('Booked for visit');
        saveBookedEstates(id);
    }
    else{toast('You already booked a visit');}
        clickedBook=true;
        clickedMark=true;
    }
    function handleMark(){
    if(clickedBook){toast('You already booked a visit')}
    else if(clickedMark){toast('Already marked for later')}
    else{toast('Marked for later');
    saveMarkedEstates(id);}
    clickedMark=true;
    }
    

    return (
        <div className="my-10 mx-4">
<div className="lg:flex space-x-10">
<div className="text-center"><img src={image} alt="" />
<span className="font-bold text-base-100 mt-6 ">{description}</span>
</div>


<div className=" text-center">
<h2 className="text-black font-bold text-3xl">{title}</h2>
<div className="lg:flex lg:space-x-40 pb-2 pt-6">
<h2><span className="text-black font-bold">Accomodation Type:</span> <span className="text-slate-600">{SingleOrMess}</span></h2>
<h2><span className="text-black font-bold">Status:</span> <span className="text-rose-600 font-bold">{status}</span></h2>
</div>
<div className="lg:flex lg:space-x-48 pb-2">
<h2><span className="text-black font-bold">Rent:</span> <span className="text-slate-600">{Rent}</span></h2>
<h2><span className="text-black font-bold">Size:</span> <span className="text-slate-600 ">{area}</span></h2>
</div>
<div className="flex space-x-52">
<div className="lg:text-left"><h2><span className="text-black font-bold  ">Location:</span> <span className="text-slate-600">{location}</span></h2></div>
<div ><h2><span className="text-black font-bold">Rent From:</span> <span className="text-slate-600">{Rentfrom}</span></h2></div>
</div>
<div className="lg:flex space-x-8 pt-8">
    <div><button onClick={handleBooked} className="btn bg-white text-black font-bold w-24 h-0">Book Visit</button></div>
    <div><button onClick={handleMark} className="btn bg-teal-300 text-black font-bold w-24 h-0 ">Mark for later</button></div>
</div>


<h2 className="lg:w-[600px] mt-4 text-yellow-800 text-justify text-sm ">{details}</h2>
<div className="lg:flex mt-8 space-x-3 text-amber-800 font-semibold">
<h2 className="mt-1">Facilities:</h2>

<div className="flex space-x-16">
    <div className="space-y-4">  
      <div className="bg-red-300 text-amber-800 px-3 py-1 rounded-2xl bg-opacity-40 ">{facilities[0]}</div>
    <div className="bg-amber-200 text-red-600  px-3 py-1 rounded-2xl bg-opacity-40">{facilities[1]}</div></div>
   <div className="space-y-4">
   <div className="bg-amber-200 text-red-600  px-3 py-1 rounded-2xl bg-opacity-40">{facilities[2]}</div>
    <div className="bg-red-300 text-amber-800 px-3 py-1 rounded-2xl bg-opacity-40">{facilities[3]}</div>
   </div>
</div>
</div>
</div>

</div>

<ToastContainer />


        </div>
    );
};

export default EstateDetail;