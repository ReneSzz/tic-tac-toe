const gameBoxs = document.getElementsByClassName("gameBox");
let marker = "";
const gameBoard = ["","","","","","","",""]




console.log(gameBoxs.length);
createClickEffect();

function createClickEffect()
{
   for (let index = 0; index < gameBoxs.length; index++) {
    gameBoxs[index].addEventListener('click', function (e){
     
    if (marker == "X") {
        marker = "O"
        if (gameBoxs[index].innerHTML === "")
        gameBoxs[index].innerHTML = marker;
        gameBoard[index]= (gameBoxs[index].innerHTML);
        console.log(gameBoard);
    }
    else if (marker == "O" || marker =="")
    marker = "X"
    if (gameBoxs[index].innerHTML === "")
        gameBoxs[index].innerHTML = marker;
        gameBoard[index]= (gameBoxs[index].innerHTML);
        console.log(gameBoard);
    })
        
    
   }
}


// add x's and o's to spaces. 



// create player objects 




//create winning combinations