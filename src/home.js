(function () {
  const config = {
    apiKey: "AIzaSyAuSrIHSTQrQaVKaucrlME5KtBH8enZD5E",
    authDomain: "hobbyhack2020.firebaseapp.com",
    databaseURL: "https://hobbyhack2020.firebaseio.com",
    projectId: "hobbyhack2020",
    storageBucket: "hobbyhack2020.appspot.com",
    messagingSenderId: "566065888514",
    appId: "1:566065888514:web:351867c85be378a89f561b"
  };
  firebase.initializeApp(config);

  const logoutButton = document.getElementById("logout");

  logoutButton.addEventListener('click', e=>{
    firebase.auth().signOut();
    window.open("index.html","_self");
  })

}());
