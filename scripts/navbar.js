
  function cambiarContenido() {
    var miDiv = document.querySelector(".linkLogo");
    if (window.innerWidth < 768) {
      miDiv.innerHTML = "#NSP";
    } else {
      miDiv.innerHTML = "#NOSEASPACO";
    }
  }

  window.addEventListener("resize", cambiarContenido);

