import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-2d7Rfjw1ImmdaSPXraTq6NJ2Uw_gmWA",
  authDomain: "fireblogsyt-58755.firebaseapp.com",
  projectId: "fireblogsyt-58755",
  storageBucket: "fireblogsyt-58755.appspot.com",
  messagingSenderId: "465271774012",
  appId: "1:465271774012:web:b6d2073a2d386ffbe79c39",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();