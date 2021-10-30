import firebase from "firebase/compat/app";

const envVars = process.env;

var firebaseConfig = {
  apiKey: envVars.VUE_APP_FIREBASE_API_KEY,
  authDomain: envVars.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: envVars.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: envVars.VUE_APP_FIREBASE_STORAGE_BUCKET,
  appId: envVars.VUE_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
