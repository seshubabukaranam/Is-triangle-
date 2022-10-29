const inputBaseHeight = document.querySelectorAll(".input-base-height");
const btnCheakArea = document.querySelector("#btn-cheak-area");
const outputMessageArea = document.querySelector("#output-message-area");

btnCheakArea.addEventListener("click", caluclateArea);
function caluclateArea(){

    if(inputBaseHeight[0].value && inputBaseHeight[1].value)
   {
    var areaOfTriangle = 0.5 * Number(inputBaseHeight[0].value) * Number(inputBaseHeight[1].value) 
    outputMessageArea.innerText = "The Area of Triangle = " + areaOfTriangle +" sqm";
   }  
   else 
  {
    outputMessageArea.innerText = " The Above Fields must not be empty ";
  } 
}






