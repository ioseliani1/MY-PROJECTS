const array = [["c++"],["javascript"],["java"],["python"]]

for (let i=0; i<array.length; i++){

    const array1 = array[i];
    
    for(let x = 0; x < array1.length; x++){

        if(array1[x]== "javascript"){
            console.log("javascript");
        }else{
            console.log("looking for" + " " +  array1[x])
            
        }

    
    
    }
}