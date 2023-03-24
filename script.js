function verificar() {
	var respuesta = document.getElementById("respuesta").value.toLowerCase();
	if (respuesta === "torta de cochinita") {
		window.location.href = "Kari.html";
	} else {
		alert("Respuesta incorrecta. Por favor intenta de nuevo.");
	}
}
