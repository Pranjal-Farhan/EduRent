import { Link } from "react-router-dom";

const EstateCard = ({Estate}) => {
    const {id,title,SingleOrMess,description,Rent,status,Rentfrom,area,details,location,facilities,image}=Estate;
    return (
        <div  className="card card-compact w-96 rounded-2xl bg-white shadow-xl m-7">
        <div className=" py-4 px-2 rounded-2xl bg-slate-200"><figure><img className="rounded-2xl" src={image} alt="Shoes" /></figure></div>
        <div className="card-body">
        <h2 className="card-title text-black font-bold text-2xl">{title}</h2>

<div className="flex space-x-24 text-black font-bold text-sm ">
<div className="flex space-x-16">
<h2><span className="text-black font-bold">Property No:</span> <span className="text-slate-600">{id}</span></h2>
<h2><span className="text-black font-bold">Type:</span> <span className="text-slate-600">{title}</span></h2>

</div>
</div>
<h2><span className="text-black font-bold">Description:</span> <span className="text-slate-600">{description}</span></h2>
<div className="flex space-x-8">
<h2><span className="text-black font-bold">Rent:</span> <span className="text-slate-600">{Rent}</span></h2>
<h2><span className="text-black font-bold">Status:</span> <span className="text-slate-600">{status}</span></h2>

</div>
<div className="flex space-x-16">

<h2><span className="text-black font-bold">Area:</span> <span className="text-slate-600">{area}</span></h2>
<h2><span className="text-black font-bold ">Location:</span> <span className="text-slate-600">{location}</span></h2>
</div>

<div className="flex mt-1 space-x-3 text-[#23BE0A] font-semibold">
<h2 className="mt-1">Facilities:</h2>

    <div className="bg-lime-200 px-3 py-1 rounded-2xl bg-opacity-40 ">{facilities[0]}</div>
    <div className="bg-lime-200 px-3 py-1 rounded-2xl bg-opacity-40">{facilities[1]}</div>
</div>

       

</div>

<div className="text-center pb-4"><Link to={`/Estates/${id}`}><button className="btn btn-primary">View Property</button></Link>
</div>
      </div>
    );
};

export default EstateCard;