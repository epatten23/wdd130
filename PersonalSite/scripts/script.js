function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("Braun");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      } else {
        y.style.display = "none";
        x.style.display = "block";
      }
  }