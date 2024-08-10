const userInput= document.getElementById("userInput");
var experession="";

function press(num){
   experession+=num;
   userInput.value=experession;

}

function equal(){
    userInput.value=eval(experession);
    experession="";

}

function erase(){
    experession="";
    userInput.value=experession;
}