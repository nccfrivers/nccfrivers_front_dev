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
    document.getElementById('blogtitleone').innerHTML = shortenText(blogs[0]['title'])
    document.getElementById('blogbodyone').innerHTML = shortenText(blogs[0]['body'][0])
    console.log('The Full List is ' + blogs)
    console.log(blogs[0])
    getlist();
})
    .catch((err) => {
        console.log(err.message)
    })

function getlist() {
    blogs.shift();
    blogs.map((bob) => {
        let shortText = bob['body'][0]
        console.log("WATCH OUT " + bob['body'][0])
        console.log("WATCH IN" + shortText)
        if (shortText.length > 75) {
            shortText = shortText.substring(0, 75);
            console.log("Shortened text")
        }
        shortText = shortText + '...'
        let bloging = `
                <div class="blog_item">
                            <img src="./img/blog_img_small.png" alt="image" srcset="">
                            <div class="blog_item_content">
                                <p class="blogcontent" overflow: hidden;
                                text-overflow: ellipsis;>${shortenText(bob['body'][0])}</p>
                                </div>
                                <button>Learn More</button>
                            </div>
                        </div>
                `
        document.getElementById('blog_items').innerHTML += bloging
    })
    // fetch(blogs)
    //     .then(response => response.json())
    //     .then(json => {
    //         json.blogs.forEach(blogls => {
    //             console.log("The list of blogs new is" + blogls)
    //             let bloging = `
    //             <div class="blog_item">
    //                         <img src="./img/blog_img_small.png" alt="image" srcset="">
    //                         <div class="blog_item_content">
    //                             <p class="blogcontent">${blogls['body']}</p>
    //                             </div>
    //                             <button>Learn More</button>
    //                         </div>
    //                     </div>
    //             `
    //             document.getElementById('blog_items').innerHTML += bloging
    //         })
    //     })
}