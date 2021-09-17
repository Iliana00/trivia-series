//document.getElementById('bttnStart').addEventListener('click', (e) => {
 //   location.href='options.html'
//})
function myName() {
    let name = document.getElementById('name').value; 
    if (name == ""){
    alert("Ingresa tu nombre, por favor");
  } else{
   localStorage.setItem('name', name);
  window.location="options.html";
  //return false; 
  }
  }
