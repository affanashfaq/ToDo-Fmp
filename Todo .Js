 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase, set ,ref } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAR5F1RfOnWlLUB9nS84W7ms0_qtNPwud0",
   authDomain: "todo-fmp-c80e0.firebaseapp.com",
   projectId: "todo-fmp-c80e0",
   storageBucket: "todo-fmp-c80e0.appspot.com",
   messagingSenderId: "994586122845",
   appId: "1:994586122845:web:94befe85ad173227ba0bb4",
   measurementId: "G-MCPDYSH5TG"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase();

 
 
 var main = document.getElementById("main");
var input = document.getElementById("input");

window.add = function () {
    var obj = {
        input: input.value
    }
    console.log(obj)
    const taskRef = ref(database, `tasks/${obj.id}/`);
    set(taskRef, obj);
};


 function add(){
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    var editBtn = document.createElement("Button");
    var editBtnText = document.createTextNode("EDIT TODO");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick","editTodo(this)");
    li.appendChild(editBtn);
    main.appendChild(li);
    input.value = "";
}

function editTodo(element){
    var newvalue = prompt("Enter updated value");
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newvalue
}