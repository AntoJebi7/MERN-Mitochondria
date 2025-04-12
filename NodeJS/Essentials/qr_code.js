import inquirer from "inquirer"
import qrim from "qr-image";
import fs from "fs";
inquirer.prompt([
    {
        message:"enter name",
        name:"name",
    }
]).then((result)=>{
    const name = result.name;
    console.log(name);
    var qr = qrim.image(name,{type:'png'});
    qr.pipe(fs.createWriteStream('sample.png'))


}).catch((error)=>{console.log(error)});


console.log("hello node")