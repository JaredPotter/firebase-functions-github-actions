const functions = require('firebase-functions');
const admin = require('firebase-admin');

const FIREBASE_TOKEN = process.env.FIREBASE_TOKEN;

console.log('FIREBASE_TOKEN: ' + FIREBASE_TOKEN);

admin.initializeApp({
  // credential: admin.credential.refreshToken(FIREBASE_TOKEN),
  credential: admin.credential.applicationDefault(),
  // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
});

const firestore = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });

  firestore.collection('things').add({ name: 'a thing' });

  response.send('Hello from Firebase!');
});
