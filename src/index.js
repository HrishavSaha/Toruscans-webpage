import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyeisbLxMeL0nxFSqVdBmNXFuwWxBS_2c",
    authDomain: "toruscans-website-6fff6.firebaseapp.com",
    projectId: "toruscans-website-6fff6",
    storageBucket: "toruscans-website-6fff6.appspot.com",
    messagingSenderId: "331724643491",
    appId: "1:331724643491:web:735074bba03a690a8b7316"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// signInWithEmailAndPassword(auth, 'hrishav.saha@gmail.com', 'Papai@123')
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log("User: "+user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("Error: "+errorMessage);
//   });
var name = [];
const card_img = ["assets/25D Seduction.jpg", "assets/Kiite Kuremasu Yo Ne Senpai.jpg"];
const cover_link = ["#", "#"];
var tags = {};

const querySnapshot = await getDocs(collection(db, "Manga"));
querySnapshot.forEach((doc) => {
    var data = doc.data();
    name.push(data.name);
    tags[data.name] = data.tags;
});

console.log(tags);

const main_section = document.getElementsByClassName('main-section')[0];
main_section.innerHTML = '';
    
for(var i=0;i<card_img.length;i++){
    var imgsrc = card_img[i];
    var link = cover_link[i];
    var capt = name[i];
    
    var card_holder = document.createElement('div');
    card_holder.className = "card-holder";
    
    var card = document.createElement('div');
    card.className = 'card';
    
    var cover_anchor = document.createElement('a');
    cover_anchor.setAttribute("href", link);
    
    var cover = document.createElement('img');
    cover.className = "cover";
    cover.setAttribute("src", imgsrc);
    cover.setAttribute("alt", name);
    
    var caption = document.createElement('p');
    caption.className = "caption";
    caption.innerHTML = capt;
    
    var caption_anchor = document.createElement('a');
    caption_anchor.setAttribute("href", link);
    
    cover_anchor.appendChild(cover);
    card.appendChild(cover_anchor);
    caption_anchor.appendChild(caption);
    card_holder.appendChild(card);
    card_holder.appendChild(caption_anchor);
    main_section.appendChild(card_holder);
}
