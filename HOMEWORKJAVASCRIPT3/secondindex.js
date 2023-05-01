const myAge = () =>{
    const today = new Date("2023-05-1");
    const birthDate = new Date("2003-12-06");
    const age = today.getFullYear()-birthDate.getFullYear();
    const tillPension = 65 - age;
    console.log(tillPension);
    
    

   
    

}

myAge();



