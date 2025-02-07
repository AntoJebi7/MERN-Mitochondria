let inputfield = document.querySelector('input');
let clks = new Audio("clksd.mp3")
function playeff(){
    clks.currentTime=0;
    clks.play();
}
function onNum(elementvalue){
    
    playeff();
    inputfield.value += elementvalue;
    console.log(elementvalue);
}
function onAns() {
    try {
        inputfield.value = eval(inputfield.value);  
        playeff();
    } catch (error) {
        inputfield.value = "Error";  
    }
}
function onClr(){
 console.log("clr clicked");
 inputfield.value = "";
 playeff();
}
function onDel(){
     console.log("del clicked");
     inputfield.value = inputfield.value.slice(0, -1);
     playeff();

}

document.addEventListener("keydown", function (event) {
    let key = event.key;
if (/[\d+\-*/.%]/.test(key)) {
        inputfield.value += key; 
        playeff();
    } else if (key === "Enter") {
        event.preventDefault(); 
        onAns();
    } else if (key === "Backspace") {
        onDel(); 
    } else if (key === "Escape") {
        onClr(); 
    }
});