const accordionItem = document.querySelectorAll(".parent");

accordionItem.forEach((parent) => {
    parent.addEventListener("click", (esemeny) => {
        parent.classList.toggle("active");
    });
});

function mail() {
    var x = document.getElementById("mail");
        x.innerHTML = "svedgabor24@gmail.com";    
  }
  function mobil() {
    var x = document.getElementById("mobil");
        x.innerHTML = "+3620/397-41*";    
  }