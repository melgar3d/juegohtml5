var contenedor = document.querySelector("#contenedor");
var lienzo = document.querySelector("#lienzo");
var btnAmpliar = document.querySelector("#btn_ampliar");

function ampliar(){
	contenedor.style.width="100%";
	contenedor.style.height="100vh";
	contenedor.style.margin="0";
	lienzo.style.width="100%";
	lienzo.style.height="100vh"; // el vh inndica que topa el porcentaje de la pantalla
	lienzo.style.backgroundSize = "cover";
	lienzo.style.backgroundRepeat = "no-repeat";

	btnAmpliar.innerHTML = "Reducir Canvas";
	btnAmpliar.style.position = "fixed";
	btnAmpliar.style.top = "10px";
	btnAmpliar.style.left = "10px";
	btnAmpliar.style.zIndex = "1";

	btnAmpliar.setAttribute("onclick", "reducir()");
}

function reducir(){
	contenedor.style.width="1000px";
	contenedor.style.height="500px";
	contenedor.style.margin="5vh auto";

	lienzo.style.width="1000px";
	lienzo.style.height="500px"; 
	
	lienzo.style.backgroundSize = "cover";
	lienzo.style.backgroundRepeat = "no-repeat";

	btnAmpliar.innerHTML = "Ampliar Canvas";
	btnAmpliar.style.position = "relative";
	btnAmpliar.style.top = "0";
	btnAmpliar.style.left = "0";
	btnAmpliar.style.zIndex = "0";

	btnAmpliar.setAttribute("onclick", "ampliar()");
}