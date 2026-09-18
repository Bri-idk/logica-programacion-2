const input = document.getElementById("grados");
const btn = document.querySelector("#btn-enviar");
const mensajeResultado = document.getElementById("resultado");
//mejora de seguridad para la ejecucion
function obtenerTipoGrado() {
  const tipoGrado = document.querySelector("input[type='radio']:checked");
  return tipoGrado ? tipoGrado.value : null;
}

function mostrarMensaje(texto, esError = false) {
  mensajeResultado.textContent = texto;
  if (esError) {
    mensajeResultado.className = "resultado error";
  } else {
    mensajeResultado.className = "resultado exito";
  }
}

btn.addEventListener("click", () => {
  const tipoGrado = obtenerTipoGrado();
  //validamos si hay grado si no imprimimos mensaje
  if (!tipoGrado) {
    alert("¡Por favor selecciona un tipo de grado!");
    return;
  }
  const gradosConvertir = parseFloat(input.value);
  // validamos si no es nul
  if (isNaN(gradosConvertir)) {
    alert("¡Por favor ingresa un número válido en el campo de texto!");
    return;
  }

  let resultado;
  let unidadOrigen = "";
  let unidadDestino = "";
  // solucion
  if (tipoGrado === "celsius") {
    resultado = (gradosConvertir * 9) / 5 + 32;
    unidadOrigen = "°C";
    unidadDestino = "°F";
  } else {
    resultado = ((gradosConvertir - 32) * 5) / 9;
    unidadOrigen = "°F";
    unidadDestino = "°C";
  }
  //ya no usamos alert mejor renderizamos en pantalla el resultado
  const resultadoFormateado = resultado.toFixed(2);
  mostrarMensaje(
    `${gradosConvertir}${unidadOrigen} equivalen a ${resultadoFormateado}${unidadDestino}`,
  );
});
