let trava = false;
let cont = 0;
let num;

const GifsParrots = [
    "bobrossparrot.gif", 
    "explodyparrot.gif", 
    "fiestaparrot.gif", 
    "metalparrot.gif", 
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];

while(trava === false){
    alert("Digite valores pares no intervalo de 4 a 14");
    num = prompt("Digite o número de cartas que deseja jogar");
    if((num > 3 && num < 15) && num%2===0){ 
        EmbaralharCartas(num);
        trava = true;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virar(elemento){
    cont++;
    let virar = elemento.children;

    virar[0].classList.add("virarFace");
    virar[1].classList.add("rodarFace");    

    testarPar();
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
       vetorObjetos.push(`<div class="card" onclick="virar(this);"><div class="front face"><img src="./assets/${GifsParrots[cont]}"></div><div class="back-face face"><img src="./assets/front.png"></div><p>${cont}</p></div>`) ;
       if((i+1)%2===0) cont++;
    }
    
    vetorObjetos.sort(comparador);
    insere(vetorObjetos);

}

function insere(vetorObjetos){
    
    let cartas = document.querySelector(".MesaCartas");

    for(let i=0; i<vetorObjetos.length; i++){
        cartas.innerHTML += vetorObjetos[i];
    }

}