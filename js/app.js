let numberinputEl = document.querySelectorAll(".box__input")
let viewScreenEl = document.querySelector("input")

function showInput(){
    for(let numbers of numberinputEl){
        numbers.addEventListener("click",function(event){
            let keyIn = "" ;
            if(event.target.classList.contains("nine")){
                keyIn = keyIn + "9";
                viewScreenEl.value = keyIn
            }
            
        })
    }
}
showInput()