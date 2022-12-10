import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9w6imDfnQff9aFBUibobWYu9-DB3PZC4",
    authDomain: "nccf-rivers.firebaseapp.com",
    databaseURL: "https://nccf-rivers-default-rtdb.firebaseio.com",
    projectId: "nccf-rivers",
    storageBucket: "nccf-rivers.appspot.com",
    messagingSenderId: "541456928146",
    appId: "1:541456928146:web:46cb798925a19e045a054b",
    measurementId: "G-1YD27KB2CL"
};

// initialize
initializeApp(firebaseConfig);

// initialize firebase db and collection
const db = getFirestore();
const contactCol = collection(db, 'contact')

//? Getting Contact documents
getDocs(contactCol).then((snapshot) => {
    let contactDetails = []
    console.log(document.URL)
    snapshot.docs.forEach((doc) => {
        contactDetails.push({ ...doc.data, id: doc.id })
    })
    console.log(contactDetails)
})
    .catch((err) => {
        console.log(err.message)
    })

//? Adding a document (CHANGE THIS LINK TO THE ORIGINAL ONE)
if (document.URL.endsWith == 'nccfrivers.org/contact.html') {
    const addContactForm = document.getElementById("contactusform")

    addContactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(addContactForm.name.value)
        console.log(addContactForm.phone.value)
        addDoc(contactCol, {
            name: addContactForm.name.value,
            phone: addContactForm.phone.value,
            email: addContactForm.email.value,
            message: addContactForm.message.value,
        })
            .then((docRef) => {
                e.preventDefault()
                window.alert("Details submitted successfully")
                addContactForm.reset()
                console.log("Form added up success")
                console.log("Document written with ID: ", docRef.id);
            }).catch((err) => {
                e.preventDefault()
                console.log(err.message)
                console.error("Error adding document: ", err);
            })
    });
}
