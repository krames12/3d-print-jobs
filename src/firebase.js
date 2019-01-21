import { firebase } from "@firebase/app";
import "@firebase/database";
import "@firebase/auth";

let firebaseApiKey =
  process.env.VUE_APP_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;

// Initialize Firebase
const config = {
  apiKey: firebaseApiKey,
  authDomain: "kramer-print-jobs.firebaseapp.com",
  databaseURL: "https://kramer-print-jobs.firebaseio.com",
  projectId: "kramer-print-jobs"
};

firebase.initializeApp(config);

export default {
  database: firebase.database(),
  auth: firebase.auth()
};
