document.addEventListener( "DOMContentLoaded", get_listDetails, false );

function get_listDetails() {
  const promise = getBookList("test");
  promise.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
    });
  })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
}
