const db = firebase.firestore();
const storage = firebase.storage();

// বই লোড
if (document.getElementById("book-list")) {
  db.collection("books").get().then(snapshot => {
    snapshot.forEach(doc => {
      document.getElementById("book-list").innerHTML += `<p>${doc.data().title}</p>`;
    });
  });
}

// আপলোড সিস্টেম
if (document.getElementById("uploadForm")) {
  document.getElementById("uploadForm").addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const file = document.getElementById("file").files[0];
    const ref = storage.ref("books/" + file.name);

    ref.put(file).then(() => {
      db.collection("books").add({ title });
      alert("আপলোড সম্পন্ন!");
    });
  });
}
