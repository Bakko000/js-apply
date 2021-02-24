// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
var Colours = ["rosso", "verde", "giallo", "blu", "arancio", "viola", "rosa", "marrone", "nero"];

// Funzione
 function myFunction() {

    col = document.getElementById("myid").value;
     marca = document.getElementById("myid2").value;
      var Auto = { 
        colore: col, 
        marca: marca 
        };
         
         col = col.toLowerCase();
         marca = marca.toLowerCase();

        if(Colours.indexOf(col) < 0){
          document.getElementById("demo2").style.display = "block";
          document.getElementById("demo").style.display = "none";

        }
         else {
         document.getElementById("demo").style.display = "block";
         document.getElementById("demo2").style.display = "none";
         document.getElementById("demo").innerHTML="<b>Hai scelto un auto di colore " + Auto["colore"] + " e di marca " + Auto["marca"] + "</b>";
         }
        } 