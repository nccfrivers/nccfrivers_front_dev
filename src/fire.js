import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { firebaseConfig, initializeApp } from './initialize'



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
