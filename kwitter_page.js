//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAk3NgFTRPwmBUWMDuo6jDjF5C_quO4aU4",
      authDomain: "lets-chat-web-app-97690.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-97690-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-97690",
      storageBucket: "lets-chat-web-app-97690.appspot.com",
      messagingSenderId: "511500492972",
      appId: "1:511500492972:web:bb5920d7eec5699c00ff09"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            likes:0,
            message:msg,
            name:user_name
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}