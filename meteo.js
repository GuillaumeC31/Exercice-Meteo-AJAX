
function $(_id){
  return document.getElementById(_id);
}

// FONCTION RECUPERATION DES VILLES A SURVEILLER
// avec intégration dans le SELECT

function clickVille() {
  // RECUPERATION DES VILLES A SURVEILLER
  fetch('http://formation.webboy.fr/liste_des_villes.php').then(function(result) {
    //console.warn('Données récupérées !');
    result.json()
    .then(function(data) {

      //console.warn('Données Jsonizées !');
      console.log(data);

      for(ville of data) {
        let villeOption = document.createElement('option');
        villeOption.innerHTML = ville.name;
        villeOption.value = ville.id;
        //console.log(ville.name);
        //console.log(ville.id);
        let villeListe = document.querySelector('select');
        villeListe.appendChild(villeOption);
        //console.log(villeOption);
        //console.log(villeListe);

        ville_Id = $('selectVille').options[$('selectVille').selectedIndex].value;
        console.log('ville_Id : ' + ville_Id);
      }
    });
  }).catch(function(error) {
    console.log(error);
  });

}
/*
$('btnVille').addEventListener('click', function(e){
    if(!empty('selectVille')){
      e.preventDefault();
      return false;
    }
  });
*/


/*******************************************************/

// RECUPERATION DES DONNEES DE LA VILLE SELECTIONNEE
// Affichage de la ville sélectionnée et des données.

let z = document.querySelector('#selectVille');
//console.log('querySelector : ' + z);




// Récupération de l'ID de la ville dans le select lors du changement de ville :
function changeVille() {
  select_Ville = $('selectVille');
  ville_Id = select_Ville.options[select_Ville.selectedIndex].value;
  console.log('ville_Id : ' + ville_Id);
}
















// API METEO
fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=63950f2bda5892c8ffcac8493d38372e').then(function(result) {
  //console.warn('Données récupérées !');
  result.json()
  .then(function(data) {
      //console.warn('Données Jsonizées !');
      console.log(data);
    });
}).catch(function(error) {
  console.error('Une erreur s\'est produite.');
  console.log(error);
})

