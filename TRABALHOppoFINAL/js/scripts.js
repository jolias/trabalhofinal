/*autor: joao  elias henkemeyer*/
function openLogin(){
	window.location.assign('index.html');
}

function openCad(){
	window.location.assign('cadastro.html');
}

function terminarCadastro(boolean){
	if (boolean = true) {
		window.location.assign('login.html');
	}else{
		return;
	}
}

function retornarValores(){
	var valor1 = document.getElementById('InputPassword1').value;
	var valor2 = document.getElementById('InputEmail1').value;
	var retorno = [valor1, valor2];
	return retorno;
}

function realizarLogin(dados){
	var matriculas = ["12182023", "12182022", "12182021"];
	var senhas = ["joao21022001", "12345678", "filhodaputa"];
	var deubom1 = 0;
	for (var i = 0; i < matriculas.length; i++) {
		console.log('Chegou aqui2');
		if(matriculas[i] == dados[1] && senhas[i] == dados[0]){
			window.location.assign('home.html');
			console.log('Chegou aqui');
			deubom1++;
		}
	}
	if (deubom1 != 1) {
		alert('Deu ruim');
	}

}

function verificarDados(){

	var matricula = document.getElementById('exampleInputText').value;
	var password = document.getElementById('exampleInputPassword1').value;
	var password2 = document.getElementById('exampleInputPassword2').value;
	var email = document.getElementById('InputEmail1').value;
	var deubom = 0;

	if (email.indexOf('@') == -1) {
		alert('Insira um email válido');
		deubom = 1;
		return;
	}
	if (matricula.length != 8) {
		alert('Matricula inválida');
		deubom = 1;
		return;
	}
	if (password.length < 8){
		alert('Sua senha deve conter mais de 8 dígitos');
		deubom = 1;
		return
	}
	if (password2 != password) {
		alert('As senhas não coincidem');
		deubom = 1;
		return;
	}

	if (deubom = 0) {
		return true;
	}else{
		return false
	}
}