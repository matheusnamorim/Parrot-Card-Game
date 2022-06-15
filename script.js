let trava = false;

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
    const num = prompt("Digite o número de cartas que deseja jogar");
    if((num > 3 && num < 15) && num%2===0){ 
        EmbaralharCartas(num);
        trava = true;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virar(elemento){

    let virar = elemento.children;
    virar[0].classList.add("virarFace");
    virar[1].classList.add("rodarFace");
}

function EmbaralharCartas(num){

    let vetorObjetos = [];
    let cont=0;

    for(let i=0; i<num; i++){
       vetorObjetos.push(`<div class="card" onclick="virar(this);"><div class="front face"><img src="./assets/${GifsParrots[cont]}"></div><div class="back-face face"><img src="./assets/front.png"></div></div>`) ;
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