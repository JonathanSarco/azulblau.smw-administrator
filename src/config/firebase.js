import firebase from "firebase/compat/app";

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
