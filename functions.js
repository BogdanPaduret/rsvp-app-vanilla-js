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
};



function checkTextInput(text){
    return !text=="";
}