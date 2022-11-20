// global variables
let listContainer = document.querySelector("section.list-cards.container");

let buttonAddInvitee = document.querySelector("header section.ceva button");
let inputAddInvitee = document.querySelector("header section.ceva input");

let undoRename;

let triggerHideNoAnswer = document.querySelector(
    "main section.list-head div.answer.container input#hide-no-answer"
);

// page initialization
initPage();

// add invitees
buttonAddInvitee.addEventListener("click", () => {
    initCard();
});
inputAddInvitee.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        initCard();
    }
});

// hide/show unconfirmed
triggerHideNoAnswer.addEventListener("click", (e) => {
    let value = e.target.checked;

    if (value == true) {
        hideUnconfirmed();
    }
    if (value == false) {
        showUnconfirmed();
    }
});

// edit/save card modifications
listContainer.addEventListener("click", (e) => {
    let element = e.target;

    let card = getButtonCard(element);

    console.log(card);

    if (card != null && element.tagName.toLowerCase() == "button") {
        console.log(
            "button " +
                element.textContent +
                " of card with name -" +
                card.querySelector(":first-child").textContent +
                "- pressed"
        );
        if (element.textContent.toLowerCase() == "edit") {
            console.log(
                "card with name -" +
                    card.querySelector(":first-child").textContent +
                    "- is being edited..."
            );
            editCard(card);
        } else if (element.textContent.toLowerCase() == "save") {
            console.log(
                "card with name -" +
                    card.querySelector(":first-child").value +
                    "- is being saved..."
            );
            saveCard(card);
        } else if (element.textContent.toLowerCase() == "remove") {
            console.log(
                "card with name -" +
                    card.querySelector(":first-child").textContent +
                    "- is being removed..."
            );
            removeCard(card);
        }
    }
});
listContainer.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        let element = e.target;
        if (element.tagName.toLowerCase() == "input") {
            let card = element.parentNode;
            saveCard(card);
        }
    }
});

// remove card
