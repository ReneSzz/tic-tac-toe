





const gameBoardCreator = () => {
const gameboardArray = ["","","","","","","","",""]
let marker = "";
const X_CLASS = 'X'; 
const circle_Class = "O";
let circleTurn = false;

const winningCombinations = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


const gameBoxs = document.getElementsByClassName("gameBox");


let createClickEffect = () =>
{
   for (let index = 0; index < gameBoxs.length; index++) {
    gameBoxs[index].addEventListener('click', function (e){
     
       
        const currentClass = circleTurn ? circle_Class : X_CLASS
        if (gameBoxs[index].innerHTML == ""){
        gameBoxs[index].classList.add(currentClass);
        console.log(currentClass);
        gameBoxs[index].innerHTML = currentClass;
        if (checkWin(currentClass)){
            console.log('winner');
        }
        else if (isDraw()){
            console.log("draw!")
        }

        swapTurns();
        }



 
    })
        
    
   }

   function swapTurns(){
    circleTurn = !circleTurn;
   }

}

function checkWin(currentClass){
    return winningCombinations.some(combination =>{
        return combination.every(index =>  {
        return gameBoxs[index].classList.contains(currentClass)
    })
    })
    
}
function isDraw() {
    return [...gameBoxs].every(cell => { 
    return cell.classList.contains(X_CLASS) || cell.classList.contains(circle_Class)
    })
}

return {createClickEffect};
}


const gameBoard = gameBoardCreator();
gameBoard.createClickEffect();





// add x's and o's to spaces. 



// create player objects 




//create winning combinations