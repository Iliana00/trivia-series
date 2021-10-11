window.onload = function() {
  base_preguntas = readText("questions.json")
  interprete_bp = JSON.parse(questions)
  chooseQuestion()
}
function myName() {
    let name = document.getElementById('name').value; 
    if (name == ""){
    alert("Ingresa tu nombre, por favor");
  } else{
   localStorage.setItem('name', name);
  window.location="options.html";
  }};

function chooseQuestion () {
  document.getElementById("bttnFriends").addEventListener('click', (e) => {
    location.href="./friends/friends.html";
    //const qtion = getElementById("qtion");
    select_id("qtion").innerHTML = friends.question;
  });
} 

document.getElementById("bttnFriends").addEventListener('click', (e) => {
  location.href="./friends/friends.html";
});

document.getElementById("bttnFriends").addEventListener('click', (e) => {
  location.href="./friends/friends.html";
});

document.getElementById("bttnFriends").addEventListener('click', (e) => {
location.href="./friends/friends.html";
})
document.getElementById("bttnFriends").addEventListener('click', (e) => {
  location.href="./friends/friends.html";
})
document.getElementById("bttnFriends").addEventListener('click', (e) => {
location.href="./friends/friends.html";
})

