let listContainer=document.querySelector("section.list-cards.container");

let buttonAddInvitee=document.querySelector("header section.ceva button");
let inputAddInvitee=document.querySelector("header section.ceva input");

let triggerHideNoAnswer=document.querySelector("main section.list-head div.answer.container input#hide-no-answer");
triggerHideNoAnswer.checked=false;




buttonAddInvitee.addEventListener("click", ()=>{
    initCard();
})

inputAddInvitee.addEventListener("keydown", (e)=>{
    if(e.key=="Enter"){
        initCard();
    }
})





triggerHideNoAnswer.addEventListener("click", (e)=>{
    let value=e.target.checked;
    alert(value);
})