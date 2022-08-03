








const gameBoardCreator = () => {
const gameboardArray = ["","","","","","","","",""]
let marker = "";

const gameBoxs = document.getElementsByClassName("gameBox");
let createClickEffect = () =>
{
   for (let index = 0; index < gameBoxs.length; index++) {
    gameBoxs[index].addEventListener('click', function (e){
     
    if (marker == "X") {
        marker = "O"
        if (gameBoxs[index].innerHTML === "")
        gameBoxs[index].innerHTML = marker;
        gameboardArray[index]= (gameBoxs[index].innerHTML);
        console.log(gameboardArray);
    }
    else if (marker == "O" || marker =="")
    marker = "X"
    if (gameBoxs[index].innerHTML === "")
        gameBoxs[index].innerHTML = marker;
        gameboardArray[index]= (gameBoxs[index].innerHTML);
        console.log(gameboardArray);
    })
        
    
   }

}

return {createClickEffect};
}


const gameBoard = gameBoardCreator();
gameBoard.createClickEffect();





// add x's and o's to spaces. 



// create player objects 




//create winning combinations