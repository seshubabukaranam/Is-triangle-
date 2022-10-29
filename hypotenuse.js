const sideInputs = document.querySelectorAll(".side-input");
const caluclateHypotenuse = document.querySelector("#caluclate-hypotenuse");
const outputMessage3 =document.querySelector("#output-message-hypo");

caluclateHypotenuse.addEventListener("click", caluclateLengthOfHypotenuse)

function caluclateLengthOfHypotenuse() { 
    if(sideInputs[0].value && sideInputs[1].value)
    {
        var sumOfSquares = caluclateSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
        var lengthOfHypotenuse =  Math.sqrt(sumOfSquares);
        outputMessage3.innerText = "The Length of Hypotenuse : " + lengthOfHypotenuse +" m";
    }  
    else {

        outputMessage3.innerText = " The Above Fields must not be empty ";
    } 
  
}

function caluclateSumOfSquares(side1,side2)
{
    var sumOfSquares = side1*side1+side2*side2;     
     return sumOfSquares;

}