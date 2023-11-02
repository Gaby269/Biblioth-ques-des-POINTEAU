import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCgSxRqqt38faaT_nKACjz7qofM-aIHGfo",
  authDomain: "bibliotheque-pointeau.firebaseapp.com",
  projectId: "bibliotheque-pointeau",
  storageBucket: "bibliotheque-pointeau.appspot.com",
  messagingSenderId: "413650229449",
  appId: "1:413650229449:web:1793d20063380a8d5d9518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Récupérez le formulaire et ajoutez un gestionnaire d'événement pour le soumettre
const formulaire_gabrielle = document.querySelector("form-gabrielle");
const formulaire_jerome = document.querySelector("form-jerome");
const formulaire_alice = document.querySelector("form-alice");
const formulaire_matthieu = document.querySelector("form-matthieu");

formulaire_gabrielle.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire par défaut

  // Récupérez les valeurs des champs du formulaire
  const titre = document.getElementById("floatingTitre").value;
  const nomAuteur = document.getElementById("floatingNomAuteur").value;
  const prenomAuteur = document.getElementById("floatingPrenomAuteur").value;
  const edition = document.getElementById("floatingEdition").value;
  const typeDocument = document.querySelector("select").value;
  const anneeParution = document.getElementById("floatingAnnee").value;

  // Ajoutez ces données à Firestore
  const db = firebase.firestore();
  db.collection("votreCollection")
    .add({
      titre: titre,
      nomAuteur: nomAuteur,
      prenomAuteur: prenomAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Gabrielle",
    })
    .then((docRef) => {
      console.log("Document ajouté chez Gabrielle avec ID : ", docRef.id);
      // Réinitialisez les champs du formulaire après l'ajout
      formulaire_gabrielle.reset();
    })
    .catch((error) => {
      console.error(
        "Erreur lors de l'ajout du document chez Gabrielle : ",
        error
      );
    });
});

formulaire_jerome.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire par défaut

  // Récupérez les valeurs des champs du formulaire
  const titre = document.getElementById("floatingTitre").value;
  const sous_titre = document.getElementById("floatingSousTitre").value;
  const nomAuteur = document.getElementById("floatingNomAuteur").value;
  const prenomAuteur = document.getElementById("floatingPrenomAuteur").value;
  const edition = document.getElementById("floatingEdition").value;
  const typeDocument = document.querySelector("select").value;
  const anneeParution = document.getElementById("floatingAnnee").value;

  // Ajoutez ces données à Firestore
  const db = firebase.firestore();
  db.collection("documents")
    .add({
      titre: titre,
      sous_titre: sous_titre,
      nomAuteur: nomAuteur,
      prenomAuteur: prenomAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Jerome",
    })
    .then((docRef) => {
      console.log("Document ajouté chez Jérôme avec ID : ", docRef.id);
      // Réinitialisez les champs du formulaire après l'ajout
      formulaire_jerome.reset();
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout du document chez Jérôme : ", error);
    });
});

formulaire_matthieu.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire par défaut

  // Récupérez les valeurs des champs du formulaire
  const titre = document.getElementById("floatingTitre").value;
  const nomAuteur = document.getElementById("floatingNomAuteur").value;
  const prenomAuteur = document.getElementById("floatingPrenomAuteur").value;
  const edition = document.getElementById("floatingEdition").value;
  const typeDocument = document.querySelector("select").value;
  const anneeParution = document.getElementById("floatingAnnee").value;

  // Ajoutez ces données à Firestore
  const db = firebase.firestore();
  db.collection("votreCollection")
    .add({
      titre: titre,
      nomAuteur: nomAuteur,
      prenomAuteur: prenomAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Matthieu",
    })
    .then((docRef) => {
      console.log("Document ajouté chez Matthieu avec ID : ", docRef.id);
      // Réinitialisez les champs du formulaire après l'ajout
      formulaire_matthieu.reset();
    })
    .catch((error) => {
      console.error(
        "Erreur lors de l'ajout du document chez Matthieu : ",
        error
      );
    });
});

formulaire_alice.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire par défaut

  // Récupérez les valeurs des champs du formulaire
  const titre = document.getElementById("floatingTitre").value;
  const nomAuteur = document.getElementById("floatingNomAuteur").value;
  const prenomAuteur = document.getElementById("floatingPrenomAuteur").value;
  const edition = document.getElementById("floatingEdition").value;
  const typeDocument = document.querySelector("select").value;
  const anneeParution = document.getElementById("floatingAnnee").value;

  // Ajoutez ces données à Firestore
  const db = firebase.firestore();
  db.collection("votreCollection")
    .add({
      titre: titre,
      nomAuteur: nomAuteur,
      prenomAuteur: prenomAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Alice",
    })
    .then((docRef) => {
      console.log("Document ajouté chez Alice avec ID : ", docRef.id);
      // Réinitialisez les champs du formulaire après l'ajout
      formulaire_alice.reset();
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout du document chez Alice : ", error);
    });
});
