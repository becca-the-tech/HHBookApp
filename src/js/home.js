document.addEventListener( "DOMContentLoaded", getBooks, false );
document.addEventListener("DOMContectLoaded",get_listDetails,false);

let books = [];
let booklist = [];

function get_listDetails() {
  const promise = getBookList("test");
  promise.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      bookList.push(doc);
    });
  })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
}

function getBooks(){
  let result = getAllBooks();
  result.then(documents => {
    documents.forEach((doc)=>books.push(doc));
  });
}

document.getElementById("addbutton").addEventListener('click', e=>{
  e.preventDefault();
  let selectElement  = document.createElement("select");
  books.map( book => {
    book = book.data().split(",");
    let optionElement = document.createElement("Option");
    optionElement.setAttribute("class","bookname");
    optionElement.setAttribute("value", book[0]);
    optionElement.innerText = book[0];
    selectElement.appendChild(optionElement);
  });

  let bookdropdown = document.getElementById("bookdropdown");
  bookdropdown.appendChild(selectElement);
});

document.getElementById("saveButton").addEventListener('click', e=>{

  e.preventDefault();

  let booklist ;
  const listname = document.getElementById("listname").value;
  //TODO get the actual username
  const owner = "test";
  const selected = document.getElementsByTagName("select");
  const addedBooks= [];
  [].forEach.call(selected, (select)=>{
    let name = select.options[select.selectedIndex].text;
    addedBooks.push(name);
  });
  booklist = new BookList(listname,owner,false,addedBooks);
  storeBookList(booklist);

  [].forEach.call(selected, (select)=>{
    select.remove();
  });
  listname.innerText = "";
})
