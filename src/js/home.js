document.addEventListener( "DOMContentLoaded", getBooks, false );
// document.addEventListener("DOMContectLoaded",get_listDetails,false);

let books = [];
let bookList = [];

async function getBooks(){
  let result = getAllBooks();
  result.then(documents => {
    documents.forEach((doc)=>books.push(doc));
  });
  let data = await getBookList("test");
  bookList.push(data);
  getBooksForList();
}

function getBooksForList(){
  let filterBooks= [];
  console.log(bookList);
  bookList.map(book =>{
    let mybooks = book.docs[0]._document.proto.fields.books.arrayValue;
    console.log(mybooks);
    for (let i = 0 ; i <mybooks.values.length; i++){
      console.log(mybooks.values[i].stringValue);
      for (let j = 0 ; j <books.length; j++){
        if (books[j].data().toString().includes(mybooks.values[i].stringValue)){
          filterBooks.push(books[j].data());
        }
      }
    }
  })
  console.log(filterBooks);
  let containerArticle = document.getElementById("container-article");
  for (let i = 0 ; i <filterBooks.length;i++){
    let details = filterBooks[i].split(",")
    let article = document.createElement("article");
      let anchor = document.createElement("a");
      anchor.setAttribute("href","#");
      anchor.setAttribute("class","image");
        let image = document.createElement("img");
        image.setAttribute("src",details[3]);
        anchor.appendChild(image);
      let div = document.createElement("div");
      div.setAttribute("class","inner");
        let h4 = document.createElement("h4");
        h4.innerText= details[0];
        let time = document.createElement("p");
        time.innerText = "Time : "+ details[1];
        let ease = document.createElement("p");
        ease.innerText = "Reading ease of "+ details[2];
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", details[0]);
        checkbox.setAttribute("name",details[0]);
          let label = document.createElement("label");
          label.setAttribute("for",details[0]);
          label.innerText = "Finished Reading?"
        checkbox.appendChild(label);
      div.appendChild(h4);
      div.appendChild(time);
      div.appendChild(ease);
      div.appendChild(checkbox);
    article.appendChild(anchor);
    article.appendChild(div);
    containerArticle.appendChild(article);
  }

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
});

document.getElementById("logout").addEventListener('click',e=>{
  const auth = firebase.auth();
  auth.signOut();
  window.open("Login.html","_self");
})
