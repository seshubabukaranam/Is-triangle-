const inputAngle = document.querySelectorAll(".input-angle");
const btnIsTriangle = document.querySelector("#btn-istriangle");
const outputMessage = document.querySelector("#output-message");


btnIsTriangle.addEventListener("click",isTriangle);
function isTriangle(){
if(inputAngle[0].value && inputAngle[1].value && inputAngle[2].value){
   var sumOfAngle = sumOfTriangle();
   if(sumOfAngle === 180){
    outputMessage.innerText = "It Is a Triangle";
 }
 else
 outputMessage.innerText= "sorry, the angles do not form Triangle";   
}
else{     
    outputMessage.innerText = "Above field must not be empty";
}
}
function sumOfTriangle()
{
    var sum = Number(inputAngle[0].value)+Number(inputAngle[1].value)+Number(inputAngle[2].value);
    return sum
}









