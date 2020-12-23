import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBW2_O8FdWIGJgEVa4zsLyZFQiuAQQqJ_c",
    authDomain: "java-5.firebaseapp.com",
    databaseURL: "https://java-5.firebaseio.com",
    projectId: "java-5",
    storageBucket: "java-5.appspot.com",
    messagingSenderId: "94480134296",
    appId: "1:94480134296:web:efb6d3089a9eabe5fe60ed",
    measurementId: "G-Z3FCLR6TSE"
  };

var Firebase =   firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default Firebase