const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstResult = document.getElementById("res-1");
let secondtResult = document.getElementById("res-2");
let resField = [firstResult, secondtResult];

function randomizer() {

    let lmt = 0;
    while (lmt < 2) {
        let randomizedPassword = "";
        for (let i = 0; i < 15; i++) {
            let n = Math.floor(Math.random() * characters.length);      
            randomizedPassword += characters[n];
        }
        resField[lmt].textContent = randomizedPassword;
        lmt++;
    }

    firstResult.disabled = false;
    secondtResult.disabled = false; 
    
    console.log("Passwords succesfully generated..")
}

firstResult.onclick = function () {
    let copiedText = this.textContent;

    navigator.clipboard.writeText(copiedText);
}

secondtResult.onclick = function () {
    let copiedText = this.textContent;

    navigator.clipboard.writeText(copiedText);
}

firstResult.addEventListener('click',showToast);
secondtResult.addEventListener('click',showToast);

//toast notifcation

function showToast() {
    let toastBox = document.getElementById("toastBox");
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Copied to clipboard!';
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}