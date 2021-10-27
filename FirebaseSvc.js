import firebase from 'firebase';
class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyCF9h7M5VMe9yOup4BEEIAnzpAolkZJg-w',
        authDomain: 'watchapp-a9fa6.firebaseapp.com',
        databaseURL: 'https://watchapp-a9fa6-default-rtdb.firebaseio.com',
        projectId: 'watchapp-a9fa6',
        storageBucket: 'watchapp-a9fa6.appspot.com',
        messagingSenderId: '1025035286930',
        appId: '1:1025035286930:web:2b42d809cd4dd1477ea94b',
        measurementId: 'G-GDZDSWZH4Z',
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
