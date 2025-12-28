let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let resetBtn = document.getElementById("reset_btn");
let winner = document.getElementById("winner");

let turn = 0;
let gotWinner = false;

Reset();

box1.addEventListener("click", () => {
    if(!gotWinner && box1.textContent !== 'X' && box1.textContent !== 'O')
    {
        box1.textContent = DisplayValue(turn++);
        GamePlay(); 
    }        
})
box2.addEventListener("click", () => {
    if(!gotWinner && box2.textContent !== 'X' && box2.textContent !== 'O')
    {
        box2.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box3.addEventListener("click", () => {
    if(!gotWinner && box3.textContent !== 'X' && box3.textContent !== 'O')
    {
        box3.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box4.addEventListener("click", () => {
    if(!gotWinner && box4.textContent !== 'X' && box4.textContent !== 'O')
    {
        box4.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box5.addEventListener("click", () => {
    if(!gotWinner && box5.textContent !== 'X' && box5.textContent !== 'O')
    {
        box5.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box6.addEventListener("click", () => {
    if(!gotWinner && box6.textContent !== 'X' && box6.textContent !== 'O')
    {
        box6.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box7.addEventListener("click", () => {
    if(!gotWinner && box7.textContent !== 'X' && box7.textContent !== 'O')
    {
        box7.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box8.addEventListener("click", () => {
    if(!gotWinner && box8.textContent !== 'X' && box8.textContent !== 'O')
    {
        box8.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})
box9.addEventListener("click", () => {
    if(!gotWinner && box9.textContent !== 'X' && box9.textContent !== 'O')
    {
        box9.textContent = DisplayValue(turn++);
        GamePlay(); 
    }
})

resetBtn.addEventListener("click", () => {
    Reset();
});

function DisplayValue(turn)
{
    if(turn % 2 === 0)
    {
        //console.log("X");
        return "X";
    }
        
    else
    {
        //console.log("O");
        return "O";
    }
        
}

function GamePlay()
{
    if(box1.textContent != "" && box1.textContent === box2.textContent && box2.textContent === box3.textContent)
    {       
        // alert(box1.textContent + " wins");
        // Reset();
        // setTimeout(() => {
        //     //alert(box1.textContent + " wins");
        //     Winner(box1.textContent);
        //     //Reset();
        // }, 0);
        Winner(box1.textContent);
    }
    else if(box4.textContent != "" && box4.textContent === box5.textContent && box5.textContent === box6.textContent){        
        Winner(box4.textContent);
    }
    else if(box7.textContent != "" && box7.textContent === box8.textContent && box8.textContent === box9.textContent){        
        Winner(box7.textContent);
    }
    else if(box1.textContent != "" && box1.textContent === box4.textContent && box4.textContent === box7.textContent){        
        Winner(box1.textContent);
    }
    else if(box2.textContent != "" && box2.textContent === box5.textContent && box5.textContent === box8.textContent){        
        Winner(box2.textContent);
    }
    else if(box3.textContent != "" && box3.textContent === box6.textContent && box6.textContent === box9.textContent){        
        Winner(box3.textContent);
    }
    else if(box1.textContent != "" && box1.textContent === box5.textContent && box5.textContent === box9.textContent){        
        Winner(box1.textContent);
    }
    else if(box3.textContent != "" && box3.textContent === box5.textContent && box5.textContent === box7.textContent){        
        Winner(box3.textContent);
    }
    //draw condition
    else if(turn === 9 && !gotWinner)
    {
        DrawGame();
    }
        
    // else
    //     console.log("Not get a winner yet !!");
}

function Reset()
{
    winner.classList.add("hidden");
    gotWinner = false;
    let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    for (let i = 0; i < boxes.length; i++) {
        // Use the index to access the object
        boxes[i].textContent = "";    
    }
    turn = 0;
    resetBtn.textContent = "Reset";
}

function Winner(winnerName)
{
    gotWinner = true;
    winner.classList.remove("hidden");
    winner.textContent = `Player ${winnerName} won!!`;
}

function DrawGame()
{
    winner.classList.remove("hidden");
    winner.textContent = `It's a Draw!!`;
    resetBtn.textContent = "Play Again";
}
