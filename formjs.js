document.getElementById('contactform').addEventListener('submit',submitform);
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAe_YLxDsip1PLXYIagfFWBLQyynzK--AU",
    authDomain: "icon-db-36d57.firebaseapp.com",
    databaseURL: "https://icon-db-36d57-default-rtdb.firebaseio.com",
    projectId: "icon-db-36d57",
    storageBucket: "icon-db-36d57.appspot.com",
    messagingSenderId: "708560565062",
    appId: "1:708560565062:web:3e15c5463fbf5a87436b47",
    measurementId: "G-D8SVLPVBK9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function writeData()
  {
      firebase.database().ref("User").set({
          name:document.getElementById("name").value,
          Email:document.getElementById("Email").value,
          number:document.getElementById("number").value,
          Location:document.getElementById("location").value

      });
  }