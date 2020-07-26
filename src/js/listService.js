// const config = {
//   apiKey: "AIzaSyAuSrIHSTQrQaVKaucrlME5KtBH8enZD5E",
//   authDomain: "hobbyhack2020.firebaseapp.com",
//   databaseURL: "https://hobbyhack2020.firebaseio.com",
//   projectId: "hobbyhack2020",
//   storageBucket: "hobbyhack2020.appspot.com",
//   messagingSenderId: "566065888514",
//   appId: "1:566065888514:web:351867c85be378a89f561b"
// };
// firebase.initializeApp(config);
// const db = firebase.firestore();

class BookList {
  constructor (name, owner ,finished , books ) {
    this.name = name;
    this.owner = owner;
    this.finished = finished;
    this.books = books
  }
  toString() {
    return this.name + ', ' + this.owner + ', ' + this.finished;
  }
}

let bookListConverter = {
  toFirestore: function(bookList) {
    return {
      name: bookList.name,
      owner: bookList.owner,
      finished: bookList.finished,
      books: bookList.books
    }
  },
  fromFirestore: function (snapshot, options) {
    const data =snapshot.data(options);
    return new BookList(data.name,data.owner, data.finished, data.books).toString();
  }
}

function storeBookList(bookList) {

  let id =db.collection("booklist").doc().id;
  db.collection("booklist")
    .doc(id)
    .withConverter(bookListConverter)
    .set(bookList)
    .then(()=>console.log("success"))
    .catch(err => console.log(err.message));
}


function getBookList(username){
  return db.collection("booklist")
    .where("owner","==",username)
    .withConverter(bookListConverter)
    .get()


}
// // Adding new List to backend
// const username = "test"
// const newList = new BookList("my list",username,false, []);
// storeBookList(newList);
//
//
// // Fetching List from Backend
// getBookList(username);
