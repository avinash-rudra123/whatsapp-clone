import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDUNFDfs1NFM-m5xTcr-vn9HoZ5sbsmiTU",
    authDomain: "whatsapp-clone-d73f4.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d73f4.firebaseio.com",
    projectId: "whatsapp-clone-d73f4",
    storageBucket: "whatsapp-clone-d73f4.appspot.com",
    messagingSenderId: "899039684867",
    appId: "1:899039684867:web:e3fbf5bd02c759a7a0e136",
    measurementId: "G-BW851GVB01"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;