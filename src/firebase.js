import { initializeApp, database, auth } from "firebase";

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "kramer-print-jobs.firebaseapp.com",
  databaseURL: "https://kramer-print-jobs.firebaseio.com",
  projectId: "kramer-print-jobs"
};

initializeApp(config);

export default {
  database: database(),
  auth: auth()
};
