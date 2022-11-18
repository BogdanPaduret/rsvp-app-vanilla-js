function initPage(){
    triggerHideNoAnswer.checked=false;
    showUnconfirmed();
}




function createCard(list, name){
    let mainContainer=document.createElement("div");
    let header=document.createElement("h3");

    let inputContainer=document.createElement("div");
    let inputLabel=document.createElement("label");
    let inputCheckbox=document.createElement("input");

    let buttonContainer=document.createElement("div");
    let buttonEdit=document.createElement("button");
    let buttonRemove=document.createElement("button");


    mainContainer.className="card "+name;
    header.textContent=name;

    // inputContainer.className="card-input";
    inputLabel.textContent="Confirmed";
    inputLabel.className="card-input";
    inputCheckbox.type="checkbox";

    buttonContainer.className="buttons";
    buttonEdit.textContent="edit";
    buttonRemove.textContent="remove";


    inputLabel.appendChild(inputCheckbox);
    // inputContainer.appendChild(inputLabel);

    buttonContainer.appendChild(buttonEdit);
    buttonContainer.appendChild(buttonRemove);

    mainContainer.appendChild(header);
    // mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(inputLabel);
    mainContainer.appendChild(buttonContainer);

    list.appendChild(mainContainer);
}



function initCard(){
    let name=inputAddInvitee.value;
    if(checkTextInput(name)){
        createCard(listContainer,name);
        inputAddInvitee.value="";
    }
}



function checkTextInput(text){
    return !text=="";
}


function getCardCheckboxes(){
    return document.querySelectorAll("main section.list-cards .card .card-input input");
}
function getCheckboxCard(checkbox){
    return checkbox.parentNode.parentNode;
}

function hideUnconfirmed(){
    console.log("hiding things...");
    let cardCheckboxes=getCardCheckboxes();

    console.log(cardCheckboxes.length);

    for(let i=0;i<cardCheckboxes.length;i++){
        let element=cardCheckboxes[i];
        console.log(element);
        if(element.type=="checkbox"){
            console.log("checkbox found");
            console.log(element.checked)
            if(element.checked==true){
                console.log("checkbox to hide found");
                let card=getCheckboxCard(element);
                console.log(card);
                // card.toggleAttribute("hidden");
                console.log(card.style.display);
                card.style.display="none";
            }
        }else{
            alert("not a checkbox!");
        }
    }

}

function showUnconfirmed(){
    console.log("showing things...");
    let cardCheckboxes=getCardCheckboxes();

    console.log(cardCheckboxes.length);

    for(let i=0;i<cardCheckboxes.length;i++){
        let element=cardCheckboxes[i];
        console.log(element);

        if(element.type=="checkbox"){
            console.log("checkbox found");
            console.log(element.checked);

            let card=getCheckboxCard(element);
            console.log(card);

            card.removeAttribute("style");
        }
    }
}