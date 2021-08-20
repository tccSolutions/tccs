import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBt8Psc_HxP1UpM51U5A2SElondO27rjAs",
  authDomain: "tccs-d3474.firebaseapp.com",
  projectId: "tccs-d3474",
  storageBucket: "tccs-d3474.appspot.com",
  messagingSenderId: "655128436150",
  appId: "1:655128436150:web:aab200074e5b176043b517",
};

const firebaseApp = initializeApp(config);
const db = getFirestore();

const addReview = async (name, comment) => {
  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    const ref = await addDoc(collection(db, "reviews"), {
      name: name,
      comment: comment,
      date: mm + "/" + dd + "/" + yyyy,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export { db, addReview };
