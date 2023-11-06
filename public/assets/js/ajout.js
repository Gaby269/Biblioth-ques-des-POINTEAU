import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"; // Importez la configuration Firebase
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"; // Importez les modules Firestore

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const myFirebaseConfig = {
  apiKey: "AIzaSyAEbRy0Zy-vqstge-BjbU5ZQO9N-8JyVbo",
  authDomain: "bibliothequespointeau.firebaseapp.com",
  projectId: "bibliothequespointeau",
  storageBucket: "bibliothequespointeau.appspot.com",
  messagingSenderId: "779562439373",
  appId: "1:779562439373:web:0d59ca931d5f9676f74f84",
  measurementId: "G-B74DN1XD0W",
};

// Initialisez Firebase avec la configuration
const app = initializeApp(myFirebaseConfig);
// Récupérez une référence à la collection Firestore
const db = getFirestore(app);

// Récupérez les formulaires et ajoutez un gestionnaire d'événement pour les soumettres
const formulaire_gabrielle = document.getElementById("form-gabrielle");
const formulaire_jerome = document.getElementById("form-jerome");
const formulaire_alice = document.getElementById("form-alice");
const formulaire_matthieu = document.getElementById("form-matthieu");

// Désafficher les erreurs
const ajout_success = document.getElementById("ajout-success");
const ajout_erreur = document.getElementById("ajout-erreur");

const url = window.location.href;

// Ajoutez un gestionnaire d'événement pour soumettre le formulaire

if (url.includes("gabrielle")) {
  formulaire_gabrielle.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérez les valeurs des champs du formulaire
    const titre = document.getElementById("floatingTitre").value;
    const sous_titre = document.getElementById("floatingSousTitre").value;
    const tome = document.getElementById("floatingTome").value;
    const premierAuteur = document.getElementById("floating1Auteur").value;
    const deuxiemeAuteur = document.getElementById("floating2Auteur").value;
    const troisiemeAuteur = document.getElementById("floating3Auteur").value;
    const edition = document.getElementById("floatingEdition").value;
    const typeDocument = document.querySelector("select").value;
    const anneeParution = document.getElementById("floatingAnnee").value;

    // Ajoutez ces données à la collection Firestore
    addDoc(collection(db, "documents"), {
      titre: titre,
      sous_titre: sous_titre,
      tome: tome,
      premierAuteur: premierAuteur,
      deuxiemeAuteur: deuxiemeAuteur,
      troisiemeAuteur: troisiemeAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Gabrielle",
    })
      .then(() => {
        // Les données ont été ajoutées avec succès
        ajout_success.style.display = "flex";
        formulaire_gabrielle.reset(); // Réinitialise le formulaire
      })
      .catch((error) => {
        // Une erreur s'est produite
        console.error("Erreur lors de l'ajout du document : ", error);
        ajout_erreur.style.display = "flex";
      });
  });
} else if (url.includes("jerome")) {
  // Ajoutez un gestionnaire d'événement pour soumettre le formulaire
  formulaire_jerome.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérez les valeurs des champs du formulaire
    const titre = document.getElementById("floatingTitre").value;
    const sous_titre = document.getElementById("floatingSousTitre").value;
    const tome = document.getElementById("floatingTome").value;
    const premierAuteur = document.getElementById("floating1Auteur").value;
    const deuxiemeAuteur = document.getElementById("floating2Auteur").value;
    const troisiemeAuteur = document.getElementById("floating3Auteur").value;
    const edition = document.getElementById("floatingEdition").value;
    const typeDocument = document.querySelector("select").value;
    const anneeParution = document.getElementById("floatingAnnee").value;

    // Ajoutez ces données à la collection Firestore
    addDoc(collection(db, "documents"), {
      titre: titre,
      sous_titre: sous_titre,
      tome: tome,
      premierAuteur: premierAuteur,
      deuxiemeAuteur: deuxiemeAuteur,
      troisiemeAuteur: troisiemeAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Jérôme",
    })
      .then(() => {
        // Les données ont été ajoutées avec succès
        ajout_success.style.display = "flex";
        formulaire_jerome.reset(); // Réinitialise le formulaire
      })
      .catch((error) => {
        // Une erreur s'est produite
        console.error("Erreur lors de l'ajout du document : ", error);
        ajout_erreur.style.display = "flex";
      });
  });
} else if (url.includes("alice")) {
  // Ajoutez un gestionnaire d'événement pour soumettre le formulaire
  formulaire_alice.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérez les valeurs des champs du formulaire
    const titre = document.getElementById("floatingTitre").value;
    const sous_titre = document.getElementById("floatingSousTitre").value;
    const tome = document.getElementById("floatingTome").value;
    const premierAuteur = document.getElementById("floating1Auteur").value;
    const deuxiemeAuteur = document.getElementById("floating2Auteur").value;
    const troisiemeAuteur = document.getElementById("floating3Auteur").value;
    const edition = document.getElementById("floatingEdition").value;
    const typeDocument = document.querySelector("select").value;
    const anneeParution = document.getElementById("floatingAnnee").value;

    // Ajoutez ces données à la collection Firestore
    addDoc(collection(db, "documents"), {
      titre: titre,
      sous_titre: sous_titre,
      tome: tome,
      premierAuteur: premierAuteur,
      deuxiemeAuteur: deuxiemeAuteur,
      troisiemeAuteur: troisiemeAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Alice",
    })
      .then(() => {
        // Les données ont été ajoutées avec succès
        ajout_success.style.display = "flex";
        formulaire_alice.reset(); // Réinitialise le formulaire
      })
      .catch((error) => {
        // Une erreur s'est produite
        console.error("Erreur lors de l'ajout du document : ", error);
        ajout_erreur.style.display = "flex";
      });
  });
} else if (url.includes("matthieu")) {
  // Ajoutez un gestionnaire d'événement pour soumettre le formulaire
  formulaire_matthieu.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérez les valeurs des champs du formulaire
    const titre = document.getElementById("floatingTitre").value;
    const sous_titre = document.getElementById("floatingSousTitre").value;
    const tome = document.getElementById("floatingTome").value;
    const premierAuteur = document.getElementById("floating1Auteur").value;
    const deuxiemeAuteur = document.getElementById("floating2Auteur").value;
    const troisiemeAuteur = document.getElementById("floating3Auteur").value;
    const edition = document.getElementById("floatingEdition").value;
    const typeDocument = document.querySelector("select").value;
    const anneeParution = document.getElementById("floatingAnnee").value;

    // Ajoutez ces données à la collection Firestore
    addDoc(collection(db, "documents"), {
      titre: titre,
      sous_titre: sous_titre,
      tome: tome,
      premierAuteur: premierAuteur,
      deuxiemeAuteur: deuxiemeAuteur,
      troisiemeAuteur: troisiemeAuteur,
      edition: edition,
      typeDocument: typeDocument,
      anneeParution: anneeParution,
      qui: "Matthieu",
    })
      .then(() => {
        // Les données ont été ajoutées
        ajout_success.style.display = "flex";
        formulaire_matthieu.reset(); // Réinitialise le formulaire
      })
      .catch((error) => {
        // Une erreur s'est produite
        console.error("Erreur lors de l'ajout du document : ", error);
        ajout_erreur.style.display = "flex";
      });
  });
}
