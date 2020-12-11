/*var idade = 22;
var idade2 = 10;
var nome = "Amanda Sousa";
var frase="Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
*/
//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.length);

//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//console.log(lista);
//alert(lista[1]);

//Dicionario:
//var fruta = {nome: "maçã", cor:"vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);

//Lista de Dicionario:
//var frutas=[{ nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var idade = prompt("qual sua idade?")
//var idade = 18;
/*if(idade<18)
	alert("menor de idade");
else
	alert("maior de idade");*/

/*var count=0;
while(count<5){
	console.log(count);
	count++;
}
*/

/*
var count;
for(count=0; count<=5; count++){
	alert(count);
}*/

//var d = new Date();
//console.log(d.getDate());
//console.log(d.getMonth()+1);

//var lista = [nome:"Ale", "ingla","esco"];
//console.log(lista[2]);
//lista.pop("ingla");
//var1 = "aman";
//var2="leon";
//console.log(var1 + var2 + 142 + "-" +151);

/*function soma(n1, n2){
	return n1+n2;
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validarIdade(idade){
	var idade;
	if(idade >= 18)
		validar=true;
	else
		validar=false
	return validar;
}
var idade = prompt("Qual é a sua idade?");
console.log(validarIdade(idade*/

function clicou()
{
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
	window.open("https://www.youtube.com/"); /* abre youtube em uma nova pagina */
	window.location.href = "https://www.youtube.com/"; /*abre youtube na msm pagina */
}

function trocar(elemento){
	elemento.innerHTML = "Obrigada por passar o mouse";
}

function sair(elemento){
	elemento.innerHTML="Volte logo";
}

function load(){
	alert("pagina carregada");
}

function funcaochange(elemento){
	console.log(elemento.value);
}