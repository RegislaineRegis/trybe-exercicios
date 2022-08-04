
window.onload = function (){
	criandoEstados();
	const buttonSubmit = document.getElementById('buttonSubmit');
	buttonSubmit.addEventListener('click', inserirValorDiv);
	const buttonClear = document.getElementById('limpar');
	buttonClear.addEventListener('click',limpar);
}

let conteudoDiv = document.querySelector('#dadoscurriculos');

/* capiturando todos os input's
const userName = document.querySelector('#nome');
const userEmail = document.querySelector('#email');
const userCpf = document.querySelector('#cpf');
const userEndereco = document.querySelector('#endereco');
const userCidade = document.querySelector('#cidade');
const userEstado = document.querySelector('#estado');*/

function criandoEstados(){
	let estado = document.querySelector('#up');
	let arrayEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
	for(let index = 0; index < arrayEstados.length; index += 1){
	let opcao = document.createElement('option');
	opcao.innerText = arrayEstados[index];
	estado.appendChild(opcao);
	}
}

function inserirValorDiv(event){
	event.preventDefault();
	conteudoDiv.innerHTML = userName.value;
	
}


function limpar(){	
		let conteudo = document.querySelectorAll("div > font");
	for (let conteudoDiv of conteudo){
		conteudoDiv.value = '';
	}
}