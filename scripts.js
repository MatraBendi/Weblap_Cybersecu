// Kód az arajanlat.html fájlból
function checkPassword() {
    const password = document.getElementById('passwordBox').value;
    if(password == 'SzeretekWeboldaltFejleszteni') {
        document.getElementById('secretContent').style.display = 'block';
        document.getElementById('loginSection').style.display = 'none';
    } else {
        alert('Helytelen jelszó!');
    }
}

// Kód az xss.html fájlból --------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    const textbox = document.getElementById("textbox");
    if (textbox)
    {
        textbox.value = "Szeretek";
    }
});
//Ne lehessen kiolvasni a plaeholderből a jelszót, így picivel nehezebb



// Kód az index.html fájlból
document.getElementById('password').addEventListener('input', function()
{
    let password = this.value;
    let strength = calculatePasswordStrength(password);
    document.getElementById('password-strength').textContent = 'Ennyi időbe telne feltörni a jelszavad: ' + strength;
}
);

function calculatePasswordStrength(password) {
    let length = password.length;
    let hasNumbers = /\d/.test(password);
    let hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let hasMixedCase = password !== password.toLowerCase() && password !== password.toUpperCase();

    let score = length;
    if (hasNumbers) { score *= 2; }
    if (hasSpecialChars) { score *= 3; }
    if (hasMixedCase) { score *= 2; }

    let timeToCrack = 'azonnal';
    if (score > 10)
    {
        timeToCrack = 'pár másodperc';
    }

    if (score > 20)
    { 
        timeToCrack = 'néhány perc';
    }

    if (score > 35)
    { 
        timeToCrack = 'néhány óra';
    }

    if (score > 50)
    {
        timeToCrack = 'sok nap';
    }

    if (score > 70)
    {
        timeToCrack = 'nagyon sok év';
    }

    return timeToCrack;
}



function displayUserInput() {
    const input = document.getElementById('userInput').value;
    document.getElementById('display').innerHTML = input;
}

