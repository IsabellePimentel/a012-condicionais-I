let idade = prompt("Qual a sua idade?")
let ensinoMedio = confirm("Terminou o ensino médio?")
let cursandoOutraFaculdade =confirm("Está cursando alguma faculdade?")


// Se a pessoa tem 18 anos ou mais;
if(idade >= 18){
    console.log("É maior de 18 anos")
}else{
    console.log("É menor de 18 anos")
	}

// Se a pessoa terminou o ensino médio;
if(ensinoMedio){
    console.log("Já terminou o ensino médio")
}else{
    console.log("Ainda não terminou o ensino médio")
}

//Se a pessoa NÃO está cursando alguma faculdade;
if(!cursandoOutraFaculdade){
    console.log("O aluno não está cursando faculdade")
}else{
    console.log("O aluno está cursando faculdade")
}