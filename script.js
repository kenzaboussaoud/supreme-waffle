// Copyright Kenza Boussaoud

// //Exercice 2 
// var nom;
// nom = "Boussaoud";
// document.write("Bonjour, je m'appelle " + nom);

// var prénom = prompt("Quel est votre prénom?")

// // Exercice 3 
// var nombre = prompt("Quel nombre voulez-vous multiplier à 9 ? ")
// alert(9*nombre)

// //Exercice 4
// var marque = prompt("Quelle marque de voiture avez-vous?")
// var conso = prompt('Quelle est votre consommation moyenne pour cent kilomètres?')
// var cout = prompt('Quel est le coût du litre du carburant que vous utilisez?')
// var kilo = prompt(' Combien de kilomètres avez-vous effectué?')
// var calcul = (kilo/100)*conso*cout
// alert("le coût total d'un parcours de "+ kilo + "kilomètres effectué avec un véhicule de marque " + marque + " consommant "+ conso + " litres pour 100 kilomètres en moyenne, avec un prix au litre du carburant de "+ cout + "euros est de "+ calcul )

// Exercice 5
// var reponse=5>12;
// document.write(5>12);
//  var nb1=1;
//  var nb2=5;
//  var v3='7';
//  var vide ="";
//  document.write(typeof(nb1))
//document.write('<br>');
//  document.write(typeof(v3))
//document.write('<br>');
//  document.write(typeof(vide))


// var produit = nb1*nb2
//  if (produit > 0) {
//      document.write(produit)
//document.write('<br>');
//      document.write(typeof(produit))
//  }

//  var somme = nb1+v3;
//  document.write(somme);
//  document.write('<br>');
//  document.write("le type de 1 + '7' est: " + typeof(somme));
//  document.write('<br>');
//  document.write("le type d'une variable non déclarée: " + typeof(maVariable));


 //Exercice 6
 //1
//  var valeur =  Number(prompt('Veuillez saisir une valeur'));
//  alert(isNaN(valeur));
//  alert(typeof(valeur));
//  //2
//  valString1 = '7';
//  texte = 'Bonjour';
//  ValString2 = '7';
//  nb=13.5
// document.write(String(valString1));
// document.write('<br>');
// document.write(parseFloat(nb));
// document.write('<br>');
// document.write(parseFloat(ValString2));

//3
// var phrase = prompt('Saisissez une phrase en minuscule')
// document.write(phrase.toUpperCase());
// document.write('<br>');
// document.write(phrase.toUpperCase().toLowerCase());

// Exercice 7 
// var age = prompt('Saisissez votre âge ');
// if (age > 0 & age < 130) {
//     alert(age + " Age valide, c'est un " + typeof(age))
//     alert("Le double de votre âge est " + age*2)

// }
// else {
//     alert("Age non valide, veuillez resaissir votre âge")
// }

// Exercice 8 
var date1 = '30/05/03'
alert("Le mois de 30/05/03 est: " + date1.substring(3, 5));