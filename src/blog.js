import { getFirestore, collection, getDocs } from 'firebase/firestore';

// initialize firebase db and collection
const db = getFirestore();
const blogCol = collection(db, 'blog')
let blogs = []

function shortenText(string) {
    let shortText = string
    if (shortText.length > 75) {
        shortText = shortText.substring(0, 75);
        console.log("Shortened text")
        shortText = shortText + '...'
    }
    console.log("Not Shortened text")
    return shortText
}

//? Getting Contact documents
getDocs(blogCol).then((snapshot) => {
    console.log(document.URL)
    snapshot.docs.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id })
        console.log(doc.data()['title'])
    })
    let titleBlog = `
    <a class="blogPost" href="./baptismal.html?title=${blogs[0]['title']}"><div class="image">
    <div class="text">
        <h3 id="blogtitleone" class="title">${shortenText(blogs[0]['title'])}</h3>
        <p id="blogbodyone">${shortenText(blogs[0]['body'][0])}</p>
            </div>
        </div>
    </a>
            `
    document.getElementById('bigblogpost').innerHTML = titleBlog
    console.log('The Full List is ' + blogs)
    console.log(blogs[0])
    getlist();
})
    .catch((err) => {
        console.log(err.message)
    })

function getlist() {
    blogs.shift(); // THIS FUNCTION REMOVES THE FIRST ITEM IN THE LIST
    blogs.slice(0, 3).map((bob) => {
        let shortText = bob['body'][0]
        console.log("WATCH OUT " + bob['body'][0])
        console.log("WATCH IN" + shortText)
        if (shortText.length > 75) {
            shortText = shortText.substring(0, 75);
            console.log("Shortened text")
        }
        shortText = shortText + '...'
        let bloging = `
        <a class="blogPost" href="./baptismal.html?title=${bob['title']}"> <div class="blog_item">
                            <img src="./img/blog_img_small.png" alt="image" srcset="">
                            <div class="blog_item_content">
                                <p class="blogcontent" overflow: hidden;
                                text-overflow: ellipsis;>${shortenText(bob['body'][0])}</p>
                                </div>
                            </div>
                        </div>
                        </a>
                `
        document.getElementById('blog_items').innerHTML += bloging
    })
}