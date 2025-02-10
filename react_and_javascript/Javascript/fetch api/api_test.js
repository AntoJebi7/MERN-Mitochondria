

async function getdata(){
    try{
        let data = await fetch("https://fakestoreapi.com/users");
        if(!data.ok){
            console.log("nope");
        }else{
            console.log("yes");
            let gived = await data.json();
            console.log(gived[0]);
        }
    }catch(e){
        console.log("error",e);
    };
    

}

getdata();