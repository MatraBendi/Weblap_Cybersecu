//Kód az arajanlat.html fájlból --------------------------------------------
let probalkozasSzamlalo = 1;

function jelszoEllenorzes() {
    const password = document.getElementById('passwordBox').value;
    if(password == 'SzeretekWeboldaltFejleszteni') {
        document.getElementById('secretContent').style.display = 'block';
        document.getElementById('loginSection').style.display = 'none';
    }
    else {
        alert('Helytelen jelszó! Ez a(z) ' + probalkozasSzamlalo + '. próbálkozás.');
        probalkozasSzamlalo++;
        
        if (probalkozasSzamlalo > 4)
        {
            window.close();
        }
    }
}

//Kód az xss.html fájlból --------------------------------------------

//Bevitt adatot megjelníti valamennyire bemutatja a támadást.
function bevittAdatMegjelenites()
{
    const input = document.getElementById('userInput').value;
    document.getElementById('display').innerHTML = input;
}

//Ne lehessen kiolvasni a plaeholderből a jelszót, így picivel nehezebb.
window.addEventListener('DOMContentLoaded', function()
{
    const textbox = document.getElementById("textbox");
    textbox.value = "Szeretek";

});




//Kód az index.html fájlból --------------------------------------------
document.getElementById('password').addEventListener('input', function()
{
    let jelszo = this.value;
    let talalat = keresGyakoriMintazatokban(jelszo);
    let jelszoErosseg = jelszoFeltoresenekKiszamitasa(jelszo);
    if (talalat)
    {
        document.getElementById('password-strength').textContent = 'A jelszóban megtalálható gyakori minta: ' + talalat;
    }

    else
    {
        jelszoErosseg = jelszoFeltoresenekKiszamitasa(jelszo);
        document.getElementById('password-strength').textContent = 'Ennyi időbe telne feltörni a jelszavad: ' + jelszoErosseg;
    }
}
);

//Ha van idő kiegészítés: Rockyou.txt-bol atnezni az adatokat, es ha egyezest talal akkor kiirja, hogy a jelszava nyilvanossagra van hozva, változtassa meg.
function keresGyakoriMintazatokban(jelszo)
{
    let minta;
    const mintazatok = ['12345', 'qwerty', 'aaaaa', 'asd', 'asd1234', 'password', 'admin', 'admin1234'];
    for (minta of mintazatok) {
        if (jelszo.includes(minta))
        {
            return minta;
        }
    }
    return null;
}

function jelszoFeltoresenekKiszamitasa(jelszo)
{
    //Miből áll a karakterlánc
    let jelszoHossz = jelszo.length;
    let csakSzam = /\d/.test(jelszo);
    let specialisKaratker = /[!@#$%^&*(),.?":{}|<>Ä€ß÷äĐ{}^˘˘°˛`˙´˝¨]/.test(jelszo);
    let kisEsNagybetu = jelszo !== jelszo.toLowerCase() && jelszo !== jelszo.toUpperCase();

    
    //Karakter értékeinek a súlyozása
    let eredmeny = jelszoHossz;
    if (csakSzam)
    {
        eredmeny *= 1.5;
    }

    if (specialisKaratker)
    {
        eredmeny *= 2;
    }

    if(kisEsNagybetu)
    {
        eredmeny *= 1.2;
    }
   
    //Összeg ellenőrzése
    let feltoresiIdo = 'azonnal';
    if (eredmeny > 70)
    {
        feltoresiIdo = 'nagyon sok év';
    }

    else if (eredmeny > 50)
    {
        feltoresiIdo = 'sok nap';
    }

    else if (eredmeny > 35)
    {
        feltoresiIdo = 'néhány óra';
    }

    else if (eredmeny > 20)
    {
        feltoresiIdo = 'néhány perc';
    }

    else if (eredmeny > 10) //Talán sima else?
    {
        feltoresiIdo = 'pár másodperc';
    }

    return feltoresiIdo;
}



