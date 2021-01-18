var blijheid = 100;
var geluid = document.getElementById('huilen');
/* Blijheid wordt vastgesteld op 100 om mee te beginnen.*/

/*Functie verdrietig haalt aantal van blijheid af en zal de afbeeldingen ook aanpassen
naarmate het afnemen van de blijheid.*/
function verdrietig (){
  if (blijheid <= 100 && blijheid > 60){
    document.getElementById('baby').src = './images/baby1.png';
    /*source van het element image wordt aangepast, waardoor er dus een andere afbeelding getoond wordt.*/
      blijheid -= 1;
    /*Er gaat 1 van de blijheid af*/
      geluid.pause();
    /*Geluid wordt op pauze gezet*/
  }
  else if (blijheid <= 65 && blijheid > 30) {
    document.getElementById('baby').src = './images/baby2.png';
      blijheid -= 1;
      geluid.pause();
  }
  else if (blijheid <= 30 && blijheid > 0) {
    document.getElementById('baby').src = './images/baby3.png';
      blijheid -= 1;
      geluid.play();
    /*Geluid wordt afgespeeld zodra de blijheid 30 of minder is*/
  }
  else{
    blijheid -= 0;
  /*Er gaat niks van de blijheid af*/
    geluid.play();
  /*Geluid wordt afgespeeld*/
  }
  document.querySelector('h2').textContent = "De blijheid van de baby is: " + blijheid + "%";
}
setInterval(verdrietig, 500);
/*Om de 500 miliseconde wordt de functie verdrietig aangeroepen*/

function blij (){
  if (blijheid <=99 && blijheid > 94){
    document.getElementById('baby').src = './images/baby1.png';
    blijheid += 1;
    /*Er wordt 1 bij de blijheid opgeteld*/
    geluid.pause();
    /*Geluid wordt op pauze gezet*/
  }
  else if (blijheid <= 94 && blijheid > 60){
    document.getElementById('baby').src = './images/baby1.png';
    /*De source van de afbeelding wordt aangepast*/
    blijheid += 5;
    /*Er wordt 5 bij de blijheid opgeteld*/
    geluid.pause();
  }
  else if (blijheid <= 60 && blijheid > 30) {
    document.getElementById('baby').src = './images/baby2.png';
    blijheid += 5;
    geluid.pause();
  }
  else if (blijheid <= 30) {
    document.getElementById('baby').src = './images/baby3.png';
    blijheid += 5;
    geluid.play();
    /*geluid wordt afgespeeld zodra de blijheid 30 of minder is*/
  }
  document.querySelector('h2').textContent = "De blijheid van de baby is: " + blijheid + "%";
  /*De tekst van h2 wordt geselecteerd en daarna vervangen door andere tekst*/
}

document.getElementById('flesje').addEventListener('click', blij);
/*Als er op de melkfles wordt geklikt wordt functie blij aangeroepen*/
document.getElementById('speelgoed').addEventListener('click', blij);
/*Als er op het speelgoed wordt geklikt wordt functie blij aangeroepen*/
document.getElementById('baby').addEventListener('mouseover', blij);
/*Als de muis over de baby heen gaat wordt functie blij aangeroepen*/

function luiersPerJaar (luiers, dagen){
  var aantalLuiers = [3, 4, 5] ;
  var aantalDagen = 365;
  luiers = aantalLuiers[0];
  /*Eerste waarde wordt uit de array gehaald, een array begint met tellen bij 0*/
  dagen = aantalDagen;
  var jaar = luiers * dagen;
  document.querySelector('h3').textContent = "Per jaar heeft een baby minimaal " + jaar + " luiers nodig.";
}
/*Als de muis over de h3 heengaat, dan zal de functie luiersPerJaar worden aangeroepen*/
document.querySelector('h3').addEventListener('mouseover', luiersPerJaar);
