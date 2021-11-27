
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCu906z1gwu0EtJaGzYXqtSXaWn69u2p4E",
      authDomain: "kwitter-b92e8.firebaseapp.com",
      databaseURL: "https://kwitter-b92e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-b92e8",
      storageBucket: "kwitter-b92e8.appspot.com",
      messagingSenderId: "368667463803",
      appId: "1:368667463803:web:a880d14ad06514fc8252de"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
