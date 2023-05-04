let turnTitle = document.querySelector("[turn-title]")
let cells = document.querySelectorAll(".cell")
let dialog = document.querySelector("dialog")
let reloadBtn = document.querySelector("button")
let diloagLabel = document.querySelector(".diloag-label")

let turn = "x"
let complete = 0
turnTitle.textContent = turn



console.log(diloagLabel)
cells.forEach(ele=>{
    ele.addEventListener("mouseover",()=>{
        ele.setAttribute("data-content",turn)
    })
    ele.addEventListener("click",()=>{
        if(!ele.hasAttribute("chosen")) {
            ele.textContent = turn
            ele.setAttribute("chosen","")
            checkWin()
            turn === "x"? turn = "o": turn = "x"
            turnTitle.textContent = turn
            complete++
        }
        if(complete == 9){
            location.reload()
        }
    })
})

function checkWin(){
    if( cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[2].innerHTML != ""){
        endGame()
    }else if(cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[5].innerHTML != ""){
                endGame()
    }else if(cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[8].innerHTML != ""){
                endGame()
    }else if(cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[8].innerHTML != ""){
                endGame()
    }else if(cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[6].innerHTML != ""){
                endGame()
    }else if(cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[6].innerHTML != ""){
                endGame()
    }else if(cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[7].innerHTML != ""){
                endGame()
    }else if(cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[8].innerHTML != ""){
                endGame()
    }
}
function endGame(){
    diloagLabel.textContent = turn
    dialog.showModal()
    reloadBtn.addEventListener("click",()=>{
        location.reload()
    })
}

