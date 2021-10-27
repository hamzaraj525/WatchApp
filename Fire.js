import Firebase from '@react-native-firebase/app';
// import {database} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (firebase.apps.length) {
      Firebase.initializeApp({
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
  };
  checkAuth = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        Firebase.auth().signInAnonymously();
      }
    });
  };

  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: Firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = message => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);
    return _id, createdAt, text, user;
  };
  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };
  off() {
    this.db.off();
  }
  get db() {
    return Firebase.database().ref('messages');
  }
  get uid() {
    return (Firebase.auth().currentUser || {}).uid;
  }
}
export default new Fire();
