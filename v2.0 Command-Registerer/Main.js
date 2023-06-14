// Basic HTML Elements
const commandName = document.getElementById('commandname');
const message = document.getElementById('outputmsg');

// Checkboxes
const consolelogCheck = document.getElementById('clog');
const alertCheck = document.getElementById('alert');
const displayCheck = document.getElementById('display');

const registerBtn = document.getElementById('registercommandname');

const commandDisplay = document.getElementById('commanddisplay');
const messageDisplay = document.getElementById('messagedisplaypara')

const commandExeName = document.getElementById('commandnameexe');
const commandExeBtn = document.getElementById('execmdbtn');

let commands = [];


const RegisterCommand = () => {
    let registeredCommandName = commandName.value;
    let registeredMessage = message.value;
    let lastCommand = Number((commands.length));

        
    commands.push({name: registeredCommandName, message: registeredMessage, clog: consolelogCheck.checked == true ? true : false, alert: alertCheck.checked == true ? true : false, msgdisplay: displayCheck.checked == true ? true : false});

    for(let i = 0; i < lastCommand; i++) {
        if(lastCommand > 0 && commands[i].name == commands[lastCommand].name) {
            alert('Cannot enter same command name twice');
            commands.pop();
        }
        
    }
    if(commands[lastCommand].clog == false && commands[lastCommand].alert == false && commands[lastCommand].msgdisplay == false) {
        alert('Please check at least 1 checkbox');
        commands.pop();
    }
    commandDisplay.innerHTML = commands.map((txt) => {
        return `
                <div>
                    <li style="
                    transform: translateX(-400px);
                    "
                    >COMMAND_NAME: ${txt.name} | MESSAGE TYPE: ${txt.clog || txt.alert || txt.msgdisplay ? `${txt.clog || false} | ${txt.alert || false} | ${txt.msgdisplay || false}` : undefined}</li>
                    <br/>
                    <br/>
                </div>
                `;
    }).join('')
}

const ExecuteCommand = () => {
    let commandExedName = commandExeName.value;
    let lastCommand = Number((commands.length));

    
    for(let i = 0; i < lastCommand; i++) {
        if (commands[i].name == commandExedName) {
            { commands[i].msgdisplay == true ? messageDisplay.innerHTML = commands[i].message : undefined };
            { commands[i].clog == true ? console.log(commands[i].message) : undefined };
            { commands[i].alert == true ? alert(commands[i].message) : undefined };
        }
        
    }
}


registerBtn.addEventListener('click', () => {
    RegisterCommand();
})

commandExeBtn.addEventListener('click', () => {
    ExecuteCommand();
})


