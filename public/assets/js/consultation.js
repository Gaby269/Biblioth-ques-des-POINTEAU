import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"; // Importez la configuration Firebase
import {
  getFirestore,
  collection,
  getDocs,
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
// Récuperer la bdd
const documentsCollection = collection(db, "documents");

// Récupérez la référence au corps du tableau
const tableBody = document.getElementById("table-body");

// SAVOIR sur quelle page on est et quelle table remplir
// Obtenez l'URL actuelle
const url = window.location.href;
// Vérifiez si l'URL contient le nom "gabrielle"
if (url.includes("gabrielle")) {
  let cpt = 0;
  const sortedData = [];
  getDocs(documentsCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Pour chaque document dans la collection, extrayez les données
        const data = doc.data();
        sortedData.push(data); // Ajoutez les données à un tableau
      });

      // Triez le tableau par le champ "titre"
      sortedData.sort((a, b) => a.titre.localeCompare(b.titre));

      // Parcours du tableau
      for (const data of sortedData) {
        // Remplacement si jamais il n'existe pas
        if (data.qui == "Gabrielle") {
          cpt++;
          // Créez une nouvelle ligne dans le tableau
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
          <th scope="row" class="colNum">${cpt}</th>
          <td class="colTitre">${
            data.titre ? data.titre : " "
          }<br/> <p style="padding-left:0.5rem; color:grey;">${
            data.sous_titre ? data.sous_titre : " "
          }</p></td>
          <td class="colTomme">${data.tome ? data.tome : " "}</td>
          <td class="colAuteur">
            ${data.premierAuteur ? data.premierAuteur : ""}
            ${data.deuxiemeAuteur ? ", " + data.deuxiemeAuteur : ""}
            ${data.troisiemeAuteur ? ", " + data.troisiemeAuteur : ""}
          </td>
          <td class="colInterprete">
            ${data.premierInterprete ? data.premierInterprete : ""}
            ${data.deuxiemeInterprete ? ", " + data.deuxiemeInterprete : ""}
            ${data.troisiemeInterprete ? ", " + data.troisiemeInterprete : ""}
          </td>
          <td class="colEdition">${data.edition ? data.edition : " "}</td>
          <td class="colType">${
            data.typeDocument ? data.typeDocument : " "
          }</td>
          <td class="colAnne">${
            data.anneeParution ? data.anneeParution : " "
          }</td>
          <!--<td class="colBoutton${cpt}"><span class="material-symbols-outlined">edit</span><br/><span class="material-symbols-outlined">delete</span></td>-->
          `;

          // Ajoutez la nouvelle ligne au corps du tableau
          tableBody.appendChild(newRow);
        }
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données : ", error);
    });
} else if (url.includes("jerome")) {
  let cpt = 0;
  const sortedData = [];
  getDocs(documentsCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Pour chaque document dans la collection, extrayez les données
        const data = doc.data();
        sortedData.push(data); // Ajoutez les données à un tableau
      });

      // Triez le tableau par le champ "titre"
      sortedData.sort((a, b) => a.titre.localeCompare(b.titre));

      // Parcours du tableau
      for (const data of sortedData) {
        if (data.qui == "Jérôme") {
          cpt++;
          // Créez une nouvelle ligne dans le tableau
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
          <th scope="row" class="colNum">${cpt}</th>
          <td class="colTitre">${
            data.titre ? data.titre : " "
          }<br/> <p style="padding-left:0.5rem; color:grey;">${
            data.sous_titre ? data.sous_titre : " "
          }</p></td>
        <td class="colTomme">${data.tome ? data.tome : " "}</td>
        <td class="colAuteur">
          ${data.premierAuteur ? data.premierAuteur : ""}
          ${data.deuxiemeAuteur ? ", " + data.deuxiemeAuteur : ""}
          ${data.troisiemeAuteur ? ", " + data.troisiemeAuteur : ""}
        </td>
        <td class="colInterprete">
          ${data.premierInterprete ? data.premierInterprete : ""}
          ${data.deuxiemeInterprete ? ", " + data.deuxiemeInterprete : ""}
          ${data.troisiemeInterprete ? ", " + data.troisiemeInterprete : ""}
        </td>
          <td class="colEdition">${data.edition ? data.edition : " "}</td>
          <td class="colType">${
            data.typeDocument ? data.typeDocument : " "
          }</td>
          <td class="colAnne">${
            data.anneeParution ? data.anneeParution : " "
          }</td>
          <!--<td class="colBoutton${cpt}"><span class="material-symbols-outlined">edit</span><br/><span class="material-symbols-outlined">delete</span></td>-->
          `;

          // Ajoutez la nouvelle ligne au corps du tableau
          tableBody.appendChild(newRow);
        }
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données : ", error);
    });
} else if (url.includes("alice")) {
  let cpt = 0;
  const sortedData = [];
  getDocs(documentsCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Pour chaque document dans la collection, extrayez les données
        const data = doc.data();
        sortedData.push(data); // Ajoutez les données à un tableau
      });
      // Triez le tableau par le champ "titre"
      sortedData.sort((a, b) => a.titre.localeCompare(b.titre));

      // Parcours du tableau
      for (const data of sortedData) {
        if (data.qui == "Alice") {
          cpt++;
          // Créez une nouvelle ligne dans le tableau
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
          <th scope="row" class="colNum">${cpt}</th>
          <td class="colTitre">${
            data.titre ? data.titre : " "
          }<br/> <p style="padding-left:0.5rem; color:grey;">${
            data.sous_titre ? data.sous_titre : " "
          }</p></td>
        <td class="colTomme">${data.tome ? data.tome : " "}</td>
        <td class="colAuteur">
          ${data.premierAuteur ? data.premierAuteur : ""}
          ${data.deuxiemeAuteur ? ", " + data.deuxiemeAuteur : ""}
          ${data.troisiemeAuteur ? ", " + data.troisiemeAuteur : ""}
        </td>
        <td class="colInterprete">
          ${data.premierInterprete ? data.premierInterprete : ""}
          ${data.deuxiemeInterprete ? ", " + data.deuxiemeInterprete : ""}
          ${data.troisiemeInterprete ? ", " + data.troisiemeInterprete : ""}
        </td>
          <td class="colEdition">${data.edition ? data.edition : " "}</td>
          <td class="colType">${
            data.typeDocument ? data.typeDocument : " "
          }</td>
          <td class="colAnne">${
            data.anneeParution ? data.anneeParution : " "
          }</td>
          <!--<td class="colBoutton${cpt}"><span class="material-symbols-outlined">edit</span><br/><span class="material-symbols-outlined">delete</span></td>-->
          `;

          // Ajoutez la nouvelle ligne au corps du tableau
          tableBody.appendChild(newRow);
        }
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données : ", error);
    });
} else if (url.includes("matthieu")) {
  let cpt = 0;
  const sortedData = [];
  getDocs(documentsCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Pour chaque document dans la collection, extrayez les données
        const data = doc.data();
        sortedData.push(data); // Ajoutez les données à un tableau
      });

      // Triez le tableau par le champ "titre"
      sortedData.sort((a, b) => a.titre.localeCompare(b.titre));

      // Parcours du tableau
      for (const data of sortedData) {
        // Vérification a qui apartient le livre
        if (data.qui == "Matthieu") {
          cpt++;
          // Créez une nouvelle ligne dans le tableau
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
              <th scope="row" class="colNum">${cpt}</th>
              <td class="colTitre">${
                data.titre ? data.titre : " "
              }<br/> <p style="padding-left:0.5rem; color:grey;">${
            data.sous_titre ? data.sous_titre : " "
          }</p></td>
            <td class="colTomme">${data.tome ? data.tome : " "}</td>
            <td class="colAuteur">
              ${data.premierAuteur ? data.premierAuteur : ""}
              ${data.deuxiemeAuteur ? ", " + data.deuxiemeAuteur : ""}
              ${data.troisiemeAuteur ? ", " + data.troisiemeAuteur : ""}
            </td>
            <td class="colInterprete">
              ${data.premierInterprete ? data.premierInterprete : ""}
              ${data.deuxiemeInterprete ? ", " + data.deuxiemeInterprete : ""}
              ${data.troisiemeInterprete ? ", " + data.troisiemeInterprete : ""}
            </td>
              <td class="colEdition">${data.edition ? data.edition : " "}</td>
              <td class="colType">${
                data.typeDocument ? data.typeDocument : " "
              }</td>
              <td class="colAnne">${
                data.anneeParution ? data.anneeParution : " "
              }</td>
              <!--<td class="colBoutton${cpt}"><span class="material-symbols-outlined">edit</span><br/><span class="material-symbols-outlined">delete</span></td>-->
              `;

          // Ajoutez la nouvelle ligne au corps du tableau
          tableBody.appendChild(newRow);
        }
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données : ", error);
    });
} else if (url.includes("tous")) {
  let cpt = 0;
  const sortedData = [];
  getDocs(documentsCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Pour chaque document dans la collection, extrayez les données
        const data = doc.data();
        sortedData.push(data); // Ajoutez les données à un tableau
      });
      // Triez le tableau par le champ "titre"
      sortedData.sort((a, b) => a.titre.localeCompare(b.titre));

      // Parcours du tableau
      for (const data of sortedData) {
        cpt++;
        // Créez une nouvelle ligne dans le tableau
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <th scope="row" class="colNum">${cpt}</th>
          <td class="colTitre">${
            data.titre ? data.titre : " "
          }<br/> <p style="padding-left:0.5rem; color:grey;">${
          data.sous_titre ? data.sous_titre : " "
        }</p></td>
        <td class="colTomme">${data.tome ? data.tome : " "}</td>
        <td class="colAuteur">
          ${data.premierAuteur ? data.premierAuteur : ""}
          ${data.deuxiemeAuteur ? ", " + data.deuxiemeAuteur : ""}
          ${data.troisiemeAuteur ? ", " + data.troisiemeAuteur : ""}
        </td>
        <td class="colInterprete">
          ${data.premierInterprete ? data.premierInterprete : ""}
          ${data.deuxiemeInterprete ? ", " + data.deuxiemeInterprete : ""}
          ${data.troisiemeInterprete ? ", " + data.troisiemeInterprete : ""}
        </td>
          <td class="colEdition">${data.edition ? data.edition : " "}</td>
          <td class="colType">${
            data.typeDocument ? data.typeDocument : " "
          }</td>
          <td class="colAnne">${
            data.anneeParution ? data.anneeParution : " "
          }</td>
          
        <td class="colQui">${data.qui ? data.qui : " "}</td>
        <!--<td class="colBoutton${cpt}"><span class="material-symbols-outlined">edit</span><br/><span class="material-symbols-outlined">delete</span></td>-->
        `;

        // Ajoutez la nouvelle ligne au corps du tableau
        tableBody.appendChild(newRow);
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données : ", error);
    });
}
