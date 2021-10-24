//import axios from "./axios";

import firebase from "./firebase";
import "firebase/compat/database";

const db = firebase.database();
const dbRef = db.ref();

const getMurals = async () => {
  try {
    const response = await dbRef.get();
    const muralsArray = Object.entries(response.toJSON().murals);
    return muralsArray;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default { getMurals };
