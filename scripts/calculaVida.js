const inputKm = document.getElementById("km");

function actualizarNumeros() {
  const numeros = document.querySelectorAll(".circleInput");
  numeros.forEach(numero => {
    const nuevoNumero = Math.floor(Math.random() * 1000);
    numero.textContent = nuevoNumero;
  });
}

inputKm.addEventListener("input", actualizarNumeros);
