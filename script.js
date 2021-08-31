let clicking = document.querySelectorAll(".clicking");
let hiding = document.querySelector(".hiding");
let caret = document.querySelectorAll(".toggling .add-padding p:nth-child(1)");
let aTags = document.querySelectorAll('a');

function toggleFun(){

    Array.from(clicking).forEach(function(item){
        item.addEventListener('click', function(e){
            item.parentElement.nextElementSibling.classList.toggle("hiding");
            // e.target.previousElementSibling.classList.toggle("rotateCaret-add");
            item.parentElement.firstElementChild.firstElementChild.classList.toggle("rotateCaret-add");
        })
    })
}
toggleFun();