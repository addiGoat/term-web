console.log("script loaded");
const output = document.querySelector("#terminal-output");
const input = document.querySelector("#term-input");

input.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    if (event.key != "Enter") { return; }
    console.log("Enter pressed");

    submitCommand(input.value);
}

function submitCommand(text) {
    const userInput = "$" + input.value;
    printTermLine(userInput);
    input.value = '';
    console.log(text);

    runCommand(parseCommand(text));
}

function runCommand(text) {
    if (text == "help") {
        printTermLine(">no help here buddy")
    }
    else if (text == "clear") {
        while (output.firstChild) {
            output.removeChild(output.lastChild);
        }
    }
    else {
        printTermLine(">Command not recognized")
    }

}

function parseCommand(text) {
    return text.trim().toLowerCase();

}

function printTermLine(text) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("user-mesg")
    newDiv.appendChild(document.createTextNode(text));

    output.append(newDiv);
}
