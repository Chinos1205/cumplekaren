function verificar() {
	var respuesta = document.getElementById("respuesta").value.toLowerCase();
	if (respuesta === "torta de cochinita") {
		window.location.href = "Kari.html";
	} else {
		alert("Nop, respuesta incorrecta. Ánimo Ánimo.");
	}
}
