import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBt8Psc_HxP1UpM51U5A2SElondO27rjAs",
  authDomain: "tccs-d3474.firebaseapp.com",
  projectId: "tccs-d3474",

};

firebase.initializeApp(config);
const db = firebase.firestore();




const addReview = (name, comment) => {
 
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    db.collection("reviews").add(      
      {
        name: name,
        comment: comment,
        date: `${mm} ${dd} ${yyyy}`
      }
    )
  
};

export { firebase, addReview, db};
