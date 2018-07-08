import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEG_KAZvtdb3WYQEBGRdXehL8qRS5RzN0",
  authDomain: "dishes-menu-9b03b.firebaseapp.com",
  databaseURL: "https://dishes-menu-9b03b.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
