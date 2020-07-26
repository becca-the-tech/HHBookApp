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
const db = firebase.firestore();

class Book {
  constructor (name, time ,ease , image ) {
    this.name = name;
    this.time = time;
    this.ease = ease;
    this.image = image
  }
  toString() {
    return this.name + ', ' + this.time + ', ' + this.ease;
  }
}

bookConverter = {
  fromFirestore: function (snapshot, options) {
    const data =snapshot.data(options);
    return new Book(data.name,data.time, data.ease, data.image).toString();
  }
}

function getAllBooks() {
  return db.collection("books").withConverter(bookConverter).get();
}

let result = getAllBooks();
result.then(documents => {
  documents.forEach((doc)=>{console.log(`${doc.id} => ${doc.data()}`);});
})


