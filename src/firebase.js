import { initializeApp, database, auth } from "firebase";

let firebaseApiKey =
  process.env.VUE_APP_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;

// Initialize Firebase
const config = {
  apiKey: firebaseApiKey,
  authDomain: "kramer-print-jobs.firebaseapp.com",
  databaseURL: "https://kramer-print-jobs.firebaseio.com",
  projectId: "kramer-print-jobs"
};

initializeApp(config);

export default {
  database: database(),
  auth: auth()
};
