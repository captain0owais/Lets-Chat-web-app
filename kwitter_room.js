
//ADD YOUR FIREBASE LINKS HERE
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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML="Welcome " + user_name + "!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      
      row="<div id="+Room_names+" class='room_name' onClick='redirect_to_room_name(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect_to_room_name(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem(user_name);
      window.location="index.html";
}

