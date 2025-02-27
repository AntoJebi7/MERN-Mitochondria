// returns array of objects
fetch("https://fakestoreapi.com/users")
.then((response)=>{
    
    return response.json();
}).then((response)=>{
    console.log(response[0]);
}).catch((error)=>{
    console.log(error.message);
})