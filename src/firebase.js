import { initializeApp, database } from "firebase";

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "kramer-print-jobs.firebaseapp.com",
  databaseURL: "https://kramer-print-jobs.firebaseio.com",
  projectId: "kramer-print-jobs"
};

initializeApp(config);

export default {
  database: database()
};
