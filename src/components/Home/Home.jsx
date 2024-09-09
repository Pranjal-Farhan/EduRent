import {useLoaderData} from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";



const Home = () => {


const Estates= useLoaderData();
    return (
        <div>
{/* slider */}
<div className="text-center px-16 mt-8">
<div className="flex center space-x-10 ">
  <div className="text-black font-semibold text-justify w-3/4 p-10 pt-20">Welcome to EduRent, my name is Pranjal and I made this website for students like myself who want to find affordable accomodation in Rajshahi. We know how important it is to have a comfortable and affordable place to live during your academic journey. Whether you're searching for a cozy room, a shared apartment, or a larger space, EduRent offers a variety of options to suit your needs. Explore our easy-to-use listings and find a home that fits your budget and lifestyle.</div>
  <div className="carousel w-4/5 rounded-2xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/kXSvMJSz/457210259-333550979840243-8791444614220254698-n.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/gjXVBz4d/3-bhk-apartment-for-rent-sector-100-Noida-bedroom.avif" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/W48wdfhR/0149149-1270-sqft-3-bed-room-fully-furnished-flat-for-rent-at-kalabagan-1st-lane-dhaka-1205.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/pTyzpWw8/455755540-3382379398734221-326662148793559458-n-1170x785.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div></div>
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