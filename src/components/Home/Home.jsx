import {useLoaderData} from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";



const Home = () => {


const Estates= useLoaderData();
    return (
        <div>
{/* slider */}
<div className="text-center px-4">
<div className="carousel w-full rounded-2xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/chHvTHF/High-Desert-Motel-Joshua-Tree.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/djygJ4r/hotel-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/GRvGm38/hotel-1.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/rvjwMtV/family.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
{/* Estates */}
<div className="grid lg:grid-cols-3 grid-flow-col-1 gap-5">
{
Estates.map(Estate=><EstateCard key={Estate.id} Estate={Estate}></EstateCard> )

}




    
</div>


        </div>
    );
};

export default Home;