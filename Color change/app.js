const color = ["green","blue","red","white"];
const button = document.getElementById("btn");
const color_picker = document.querySelector(".color")

btn.addEventListener("click",function() {
    const number =randomNumber();
    
    document.body.style.backgroundColor = color[number];
    color_picker.textContent = color[number]
});
const randomNumber = () =>{
 return Math.floor(Math.random()*color.length)
}