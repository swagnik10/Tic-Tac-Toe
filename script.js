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

let turn = 0;

Reset();

box1.addEventListener("click", () => {
    if(box1.innerHTML !== 'X' && box1.innerHTML !== 'O')
    {
        box1.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }        
})
box2.addEventListener("click", () => {
    if(box2.innerHTML !== 'X' && box2.innerHTML !== 'O')
    {
        box2.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box3.addEventListener("click", () => {
    if(box3.innerHTML !== 'X' && box3.innerHTML !== 'O')
    {
        box3.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box4.addEventListener("click", () => {
    if(box4.innerHTML !== 'X' && box4.innerHTML !== 'O')
    {
        box4.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box5.addEventListener("click", () => {
    if(box5.innerHTML !== 'X' && box5.innerHTML !== 'O')
    {
        box5.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box6.addEventListener("click", () => {
    if(box6.innerHTML !== 'X' && box6.innerHTML !== 'O')
    {
        box6.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box7.addEventListener("click", () => {
    if(box7.innerHTML !== 'X' && box7.innerHTML !== 'O')
    {
        box7.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box8.addEventListener("click", () => {
    if(box8.innerHTML !== 'X' && box8.innerHTML !== 'O')
    {
        box8.innerHTML = DisplayValue(turn++);
        GamePlay(); 
    }
})
box9.addEventListener("click", () => {
    if(box9.innerHTML !== 'X' && box9.innerHTML !== 'O')
    {
        box9.innerHTML = DisplayValue(turn++);
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
    if(box1.innerHTML != "" && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML)
    {       
        // alert(box1.innerHTML + " wins");
        // Reset();
        setTimeout(() => {
            alert(box1.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box4.innerHTML != "" && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML){
         setTimeout(() => {
            alert(box4.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box7.innerHTML != "" && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML){
         setTimeout(() => {
            alert(box7.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box1.innerHTML != "" && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML){
        setTimeout(() => {
            alert(box1.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box2.innerHTML != "" && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML){
        setTimeout(() => {
            alert(box2.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box3.innerHTML != "" && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML){
        setTimeout(() => {
            alert(box3.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box1.innerHTML != "" && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML){
        setTimeout(() => {
            alert(box1.innerHTML + " wins");
            Reset();
        }, 0);
    }
    else if(box3.innerHTML != "" && box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML){
        setTimeout(() => {
            alert(box3.innerHTML + " wins");
            Reset();
        }, 0);
    }
        
    else
        console.log("Not get a winner yet !!");
}

function Reset()
{
    let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    for (let i = 0; i < boxes.length; i++) {
        // Use the index to access the object
        boxes[i].innerHTML = ""; 
        turn = 0;
    }
}
