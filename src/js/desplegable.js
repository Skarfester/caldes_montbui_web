// Bloc desplegable

// Variables DOM
const bloc = document.getElementById("bloc_desp");
const llista = document.getElementById("llista_desp");

// Event listeners
bloc.addEventListener("click", () => {
	llista.classList.toggle("visible");
});