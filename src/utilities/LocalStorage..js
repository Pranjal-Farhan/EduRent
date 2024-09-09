
const getBookedEstates=()=>{
   const storedEstates= localStorage.getItem('booked-estates');
   if(storedEstates){
    return JSON.parse(storedEstates)
   }
   else{ return []}
}
const saveBookedEstates=id=>{
    const savedEstates=getBookedEstates();
    const exists=savedEstates.find(estateId=>estateId===id);

    if(!exists){
        savedEstates.push(id);
        localStorage.setItem('booked-estates', JSON.stringify(savedEstates))
    }
}
const getMarkedEstates=()=>{
    const storedEstates= localStorage.getItem('marked-estates');
    if(storedEstates){
     return JSON.parse(storedEstates)
    }
    else{ return []}
 }
 const saveMarkedEstates=id=>{
    const savedEstates=getMarkedEstates();
    const exists=savedEstates.find(estateId=>estateId===id);

    if(!exists){
        savedEstates.push(id);
        localStorage.setItem('marked-estates', JSON.stringify(savedEstates))
    }
}



export{getBookedEstates,saveBookedEstates,getMarkedEstates,saveMarkedEstates}