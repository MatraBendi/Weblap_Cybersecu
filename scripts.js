// Kód az arajanlat.html fájlból
function checkPassword() {
    var password = document.getElementById('passwordBox').value;
    if(password == 'SzeretekWeboldaltFejleszteni') {
        document.getElementById('secretContent').style.display = 'block';
        document.getElementById('loginSection').style.display = 'none';
    } else {
        alert('Helytelen jelszó!');
    }
}

// Kód az index.html fájlból
document.getElementById('password').addEventListener('input', function()
{
    var password = this.value;
    var strength = calculatePasswordStrength(password);
    document.getElementById('password-strength').textContent = 'Ennyi időbe telne feltörni a jelszavad: ' + strength;
});

function calculatePasswordStrength(password) {
    var length = password.length;
    var hasNumbers = /\d/.test(password);
    var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var hasMixedCase = password !== password.toLowerCase() && password !== password.toUpperCase();

    var score = length;
    if (hasNumbers) { score *= 2; }
    if (hasSpecialChars) { score *= 3; }
    if (hasMixedCase) { score *= 2; }

    var timeToCrack = 'azonnal';
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

// Kód az xss.html fájlból --------------------------------------------
window.onload = function() {
    document.getElementById("textbox").value = "Szeretek";
}//Ne lehessen kiolvasni a plaeholderből a jelszót, így picivel nehezebb


function displayUserInput() {
    var input = document.getElementById('userInput').value;
    document.getElementById('display').innerHTML = input;
}

