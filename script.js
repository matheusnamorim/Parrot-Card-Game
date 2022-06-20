let trava = false;
let cont = 0;
let num;
let contador = 0;
let idInterval;

const GifsParrots = [
    "bobrossparrot.gif", 
    "explodyparrot.gif", 
    "fiestaparrot.gif", 
    "metalparrot.gif", 
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];
Inicio();
function Inicio(){
    trava = false;
    cont = 0;
    contador = 0;
    document.querySelector(".relogio").innerHTML = `00`;
    document.querySelector(".tamparClick").classList.add("escondido");
    while(trava === false){
        
        num = prompt("Digite o número de cartas que deseja jogar\nRegras:\n-Valores pares\n-Valores no intervalo de 4 a 14");
        if((num > 3 && num < 15) && num%2===0){ 
            EmbaralharCartas(num);
            trava = true;
            break;
        }
        alert("Digite apenas valores pares no intervalo de 4 a 14");
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virar(elemento){
    let virar = elemento.children;
    
    if(document.querySelectorAll(".virarFace").length <= 1){
        if(virar[0].classList.contains("virarFace") !== true && virar[0].classList.contains("virarFaceRevelada") !== true){
            cont++;
            virar[0].classList.add("virarFace");
            virar[1].classList.add("rodarFace");    
        }
        if(cont === 1) idInterval = setInterval(relogio, 1000);
        testarPar();
        testaFimJogo();
    }
}

function cartaRevelada(carta1, carta2){
    carta1.classList.remove("virarFace");
    carta1.classList.add("virarFaceRevelada");
    carta2.classList.remove("virarFace");
    carta2.classList.add("virarFaceRevelada");
}

function virarCarta(carta1Virar, carta1Rodar, carta2Virar, carta2Rodar){

    setTimeout(function(){
        carta1Virar.classList.remove("virarFace"); 
        carta1Rodar.classList.remove("rodarFace");
        carta2Virar.classList.remove("virarFace"); 
        carta2Rodar.classList.remove("rodarFace");
    }, 1000);
}

function testarPar(){
    const cartaVirada = document.querySelectorAll(".virarFace");
    if(cartaVirada.length === 2){
        const numeracaoCarta1 = cartaVirada[0].parentNode.children;
        const numeracaoCarta2 = cartaVirada[1].parentNode.children;
        if(numeracaoCarta1[2].innerHTML === numeracaoCarta2[2].innerHTML){
            cartaRevelada(cartaVirada[0], cartaVirada[1]);
        }else{
            
            virarCarta(numeracaoCarta1[0], numeracaoCarta1[1], numeracaoCarta2[0], numeracaoCarta2[1]);
        }
    }
}

function EmbaralharCartas(num){

    let vetorObjetos = [];
    let cont=0;

    for(let i=0; i<num; i++){
       vetorObjetos.push(`<div class="card" onclick="virar(this);"><div class="front-face face"><img src="./assets/front.png"></div><div class="back-face face"><img src="./assets/${GifsParrots[cont]}"></div><p>${cont}</p></div>`) ;
       if((i+1)%2===0) cont++;
    }
    
    vetorObjetos.sort(comparador);
    insere(vetorObjetos);

}

function insere(vetorObjetos){
    
    let cartas = document.querySelector(".MesaCartas"); 
    const qtd = document.querySelectorAll(".card");
    if(qtd.length != 0){
        for(let i=0; i<qtd.length; i++) {  
            const no = document.querySelector(".card");
            no.parentNode.removeChild(no);
        }
    }
    for(let i=0; i<vetorObjetos.length; i++){
        cartas.innerHTML += vetorObjetos[i];
    }

}

function testaFimJogo(){
    const cartasReveladas = document.querySelectorAll(".virarFaceRevelada");
    if(cartasReveladas.length === Number(num)) {
        document.querySelector(".tamparClick").classList.remove("escondido");
        clearInterval(idInterval);
        finalJogo();
    }
}

function finalJogo(){
    setTimeout(function(){
        alert(`Você ganhou em ${cont} jogadas e ${contador} segundos!`);
        reiniciarJogo();
    }, 1000);
}

function reiniciarJogo(){
    let jogarNovamente;
    while(jogarNovamente != "sim" && jogarNovamente != "não"){
        jogarNovamente = prompt("Gostaria de jogar de novo?\nDigite sim ou não!");
        if(jogarNovamente === "sim") {
            Inicio();
            break;
        }
        if(jogarNovamente === "não"){
            break;
        }
        alert("Digite APENAS sim ou não, com todas as letras minúsculas e acentuação correta.");
    }
}
    
function relogio(){
    contador++;
    if(contador < 10) document.querySelector(".relogio").innerHTML = `0${contador}`;
    else document.querySelector(".relogio").innerHTML = contador;
}