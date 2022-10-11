import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDRplX56V2QPuCWR47w_atDpw2jkckgo0c",
    authDomain: "tempos-e-metodos.firebaseapp.com",
    projectId: "tempos-e-metodos",
    storageBucket: "tempos-e-metodos.appspot.com",
    messagingSenderId: "301301159324",
    appId: "1:301301159324:web:9e995f4b2912d00628a459",
    databaseURL: "https://tempos-e-metodos-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database