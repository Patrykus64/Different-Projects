const color = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const button = document.getElementById("btn");
const color_picker = document.querySelector(".color");



btn.addEventListener("click",function (){
    let hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += color[randomise()];
        
    }
    document.body.style.backgroundColor = hexColor;
    color_picker.textContent = hexColor;

    

});
const  randomise = () => {
    return Math.floor(Math.random() * color.length)
   }  