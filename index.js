console.log("script loaded");
const output = document.querySelector("#terminal-output");
const input = document.querySelector("#term-input");

input.addEventListener("keydown", echoCommand);

let commands = []

function echoCommand(event) {
    key = event.key;
    console.log(key);
    if (key == "Enter") {
        console.log(input.value);

        let command = input.value;
        addElement(command);
        
    }
}

function addElement(command) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("user-mesg")

    const cmdInput = "$" + command;
    const cmdContent = document.createTextNode(cmdInput);

    newDiv.appendChild(cmdContent);

    output.append(newDiv);
    input.value = '';
}
