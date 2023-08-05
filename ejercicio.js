console.log("Hola Mundo")

var myDate = new Date();
var hrs = myDate.getHours();
var saludar;
    if (hrs < 12)
        saludar = 'Buenos días';
    else if (hrs >= 12 && hrs <= 18)
        saludar = 'Buenas tardes';
    else if (hrs >= 18 && hrs <= 24)
        saludar = 'Buenas noches';

document.getElementById('saludo').innerHTML = saludar;