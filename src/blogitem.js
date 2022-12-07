import { getFirestore, collection, getDoc, doc } from 'firebase/firestore';

// initialize firebase db and collection
const db = getFirestore();
const blogCol = collection(db, 'blog')
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
            let totalBlogBody = `
            <p>${oneBlog}</p>
            &nbsp;
            `
            document.getElementById('singleblogbody').innerHTML += totalBlogBody
            console.log('Counts ' + oneBlog)

        })
    })
    console.log(idValue)
}

getABlogPost()