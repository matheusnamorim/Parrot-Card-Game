let trava = false;
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

function EmbaralharCartas(num){

    let vetorObjetos = [];

    for(let i=0; i<num; i++){
       vetorObjetos.push(`<div><img src="./assets/front.png"></div>`) ;
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