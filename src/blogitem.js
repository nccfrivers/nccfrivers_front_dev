import { getFirestore, collection, getDoc, doc } from 'firebase/firestore';
import { firebaseConfig,initializeApp } from './initialize'



initializeApp(firebaseConfig);

// initialize firebase db and collection
const db = getFirestore();
let idValue = '';
let finalList = []

//? TODO Getting a particular blog content
function getABlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const greetingValue = urlParams.get('title');
    idValue = urlParams.get('id');
    console.log("The title is " + greetingValue + " and the id is " + idValue);
    document.getElementById('singleblogtitle').innerHTML += greetingValue.toString();
    const docRef = doc(db, "blog", idValue);
    getDoc(docRef).then((snapshot) => {
        console.log("snapshot.docs['title']")
        console.log(snapshot.data()['title'])
        console.log(snapshot.data()['body'])
        finalList.push({ ...snapshot.data()['body'] })
        console.log("Now the list")
        console.log(finalList)
        snapshot.data()['body'].forEach((oneBlog) => {
            console.log("Checking")
            let totalBlogBody = ``;
            if (snapshot.data()['body'][snapshot.data()['body'].length - 1] == oneBlog) {
                console.log("Last one")
                totalBlogBody = `
                <p>${oneBlog}</p>
                <br>
                <br>
                `
            } else {
                console.log("Not Last one")
                totalBlogBody = `
                <p>${oneBlog}</p>
            <br>
            `
            }
            document.getElementById('singleblogbody').innerHTML += totalBlogBody
            console.log('Counts ' + oneBlog)

        })
    })
    console.log(idValue)
}

getABlogPost()