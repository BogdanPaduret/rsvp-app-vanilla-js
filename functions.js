// page initialization
function initPage() {
    triggerHideNoAnswer.checked = false;
    showUnconfirmed();

    inputAddInvitee.select();
}

// card creation
function initCard() {
    let name = inputAddInvitee.value;
    if (isTextValid(name)) {
        createCard(listContainer, name);
    } else {
        blink();
    }
    inputAddInvitee.value = "";
}
function createCard(list, name) {
    let mainContainer = document.createElement("div");
    let header = document.createElement("h3");

    let inputContainer = document.createElement("div");
    let inputLabel = document.createElement("label");
    let inputCheckbox = document.createElement("input");

    let buttonContainer = document.createElement("div");
    let buttonEdit = document.createElement("button");
    let buttonRemove = document.createElement("button");

    mainContainer.className = "card " + name;
    header.textContent = name;
    header.className = "title";

    // inputContainer.className="card-input";
    inputLabel.textContent = "Confirmed";
    inputLabel.className = "card-input";
    inputCheckbox.type = "checkbox";

    buttonContainer.className = "buttons";
    buttonEdit.textContent = "edit";
    buttonRemove.textContent = "remove";

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

// hide/show unconfirmed
function hideUnconfirmed() {
    console.log("hiding things...");
    let cardCheckboxes = getCardCheckboxes();

    console.log(cardCheckboxes.length);

    for (let i = 0; i < cardCheckboxes.length; i++) {
        let element = cardCheckboxes[i];
        console.log(element);
        if (element.type == "checkbox") {
            console.log("checkbox found");
            console.log(element.checked);
            if (element.checked == true) {
                console.log("checkbox to hide found");
                let card = getCheckboxCard(element);
                console.log(card);
                // card.toggleAttribute("hidden");
                console.log(card.style.display);
                card.style.display = "none";
            }
        } else {
            alert("not a checkbox!");
        }
    }
}
function showUnconfirmed() {
    console.log("showing things...");
    let cardCheckboxes = getCardCheckboxes();

    console.log(cardCheckboxes.length);

    for (let i = 0; i < cardCheckboxes.length; i++) {
        let element = cardCheckboxes[i];
        console.log(element);

        if (element.type == "checkbox") {
            console.log("checkbox found");
            console.log(element.checked);

            let card = getCheckboxCard(element);
            console.log(card);

            card.removeAttribute("style");
        }
    }
}

// edit card
function editCard(card) {
    let cardChildren = card.children;
    let buttonsElement = card.querySelector(".buttons");
    let buttonsChildren = buttonsElement.children;

    let buttonEdit = buttonsElement.querySelector(":first-child");

    console.log(cardChildren);
    console.log(buttonsElement);
    console.log(buttonsChildren);
    console.log(buttonEdit);

    let inputCard = document.createElement("div");
    inputCard.className = card.className;

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = cardChildren[0].className;
    nameInput.value = cardChildren[0].textContent;

    // for invalid text on save
    undoRename = cardChildren[0].textContent;

    console.log(nameInput);

    buttonEdit.textContent = "save";

    inputCard.appendChild(nameInput);
    inputCard.appendChild(cardChildren[1]);
    inputCard.appendChild(buttonsElement);

    console.log(inputCard);

    card.parentNode.replaceChild(inputCard, card);

    nameInput.select();
}
function saveCard(card) {
    let cardChildren = card.children;
    let buttonsElement = card.querySelector(".buttons");
    let buttonsChildren = buttonsElement.children;

    let buttonEdit = buttonsElement.querySelector(":first-child");

    console.log(cardChildren);
    console.log(buttonsElement);
    console.log(buttonsChildren);
    console.log(buttonEdit);

    let staticCard = document.createElement("div");
    staticCard.className = card.className;

    let nameHeader = document.createElement("h3");
    nameHeader.className = cardChildren[0].className;
    nameHeader.textContent = cardChildren[0].value;

    console.log(undoRename);

    // if text is not valid, resume name
    if (!isTextValid(nameHeader.textContent)) {
        nameHeader.textContent = undoRename;
    }

    console.log(nameHeader);

    buttonEdit.textContent = "edit";

    staticCard.appendChild(nameHeader);
    staticCard.appendChild(cardChildren[1]);
    staticCard.appendChild(buttonsElement);

    console.log(staticCard);

    card.parentNode.replaceChild(staticCard, card);
}

// delete card
function removeCard(card) {}

// -------- HELPERS --------

// check text input
function isTextValid(text) {
    let check = true;
    if (text == "") {
        console.log("input must have content");
        check = false;
    } else if (text.length > 30) {
        console.log("length can not be higher than 30 characters");
        check = false;
    } else if (containsSpecialCharacters(text)) {
        check = false;
    }

    return check;
}
function containsSpecialCharacters(text) {
    let specialCharacters = [
        "-",
        "*",
        "/",
        "+",
        "?",
        "!",
        ";",
        ":",
        '"',
        "'",
        "\n",
        "\t",
        "[",
        "]",
        "(",
        ")",
        "{",
        "}",
        "=",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "_",
        "`",
        "~",
        "<",
        ">",
        ",",
        ".",
        "|",
        "\\\\",
    ];

    for (let i = 0; i < specialCharacters.length; i++) {
        if (text.includes(specialCharacters[i])) {
            return true;
        }
    }

    return false;
}

// get card from button
function getButtonCard(button) {
    let card = button.parentNode.parentNode;
    if (card.className.split(" ").includes("card")) {
        return card;
    } else {
        return null;
    }
}

// get card from confirmation checkbox
function getCheckboxCard(checkbox) {
    return checkbox.parentNode.parentNode;
}

// get all checkboxes from cards list
function getCardCheckboxes() {
    return document.querySelectorAll(
        "main section.list-cards .card .card-input input"
    );
}

// blinker
function blink() {
    console.log("invalid entry");
}
