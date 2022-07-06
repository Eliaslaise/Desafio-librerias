const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	swal.fire({
		title:"Se cambió el modo de vista",
		icon:"warning",
		footer:"Para volver a cambiar presione el switch"
	})
});

const btnBP = document.querySelector("#BP");

btnBP.addEventListener("click", () => {
	swal.fire({
		title:"se ha agregado a su carrito",
		icon:"success",
		footer:"Muchas gracias!"
	});
});

const btnBP2 = document.querySelector("#BP2");

btnBP2.addEventListener("click", () => {
	swal.fire({
		title:"se ha agregado a su carrito",
		icon:"success",
		footer:"Muchas gracias!"
	});
});

const btnBP3 = document.querySelector("#BP3");

btnBP3.addEventListener("click", () => {
	swal.fire({
		title:"se ha agregado a su carrito",
		icon:"success",
		footer:"Muchas gracias!"
	});
});

const btnBS = document.querySelector("#BS");


btnBS.addEventListener("click", () => {
	swal.fire({
		title:"Ha ocurrido un error inesperado",
		icon:"error",
	});
});

const btnBS2 = document.querySelector("#BS2");


btnBS2.addEventListener("click", () => {
	swal.fire({
		title:"Ha ocurrido un error inesperado",
		icon:"error",
	});
});

const btnBS3 = document.querySelector("#BS3");


btnBS3.addEventListener("click", () => {
	swal.fire({
		title:"Ha ocurrido un error inesperado",
		icon:"error",
	});
});