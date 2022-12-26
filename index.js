const accordionItem = document.querySelectorAll(".parent");

accordionItem.forEach((parent) => {
    parent.addEventListener("click", (esemeny) => {
        parent.classList.toggle("active");
    });
});

function mail() {
    var x = document.getElementById("mail");
        x.innerHTML = "please login first!";    
  }
  function mobil() {
    var x = document.getElementById("mobil");
        x.innerHTML = "please login first!";    
  }

  let cdate = new Date().toISOString().replace('-', '_').split('T')[0].replace('-', '/');

  var opt = {
    margin:       1,
    filename:     'CV_Schved_Gabor_'+cdate+'.pdf'};

  function makePDF() {
    let element = document.getElementById("pdf");
    html2pdf().set(opt).from(element).save()
  }
