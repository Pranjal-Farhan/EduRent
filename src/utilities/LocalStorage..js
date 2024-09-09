
const getBookedEstates=()=>{
   const storedEstates= localStorage.getItem('booked-estates');
   if(storedEstates){
    return JSON.parse(storedEstates)
   }
   return [];
}
const saveBookedEstates=id=>{
    const storedEstates=getBookedEstates();
    const exists=storedEstates.find(estateId=>estateId===id);

    if(!exists){
        storedEstates.push(id);
        localStorage.setItem('booked-estates', JSON.stringify(storedEstates))
    }
}
const getMarkedEstates=()=>{
    const storedEstates= localStorage.getItem('marked-estates');
    if(storedEstates){
     return JSON.parse(storedEstates)
    }
    return [];
 }
 const saveMarkedEstates=id=>{
    const storedEstates=getMarkedEstates();
    const exists=storedEstates.find(estateId=>estateId===id);

    if(!exists){
        storedEstates.push(id);
        localStorage.setItem('marked-estates', JSON.stringify(storedEstates))
    } 
}



export{getBookedEstates,saveBookedEstates,getMarkedEstates,saveMarkedEstates}