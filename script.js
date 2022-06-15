let trava = false;
while(trava === false){
    const num = prompt("Digite o número de cartas");
    if((num > 3 && num < 15) && num%2===0){ 
        desenharCartas(num);
        trava = true;
    }
}

function desenharCartas(num){
    let cartas = document.querySelector(".MesaCartas");
    
    for(let i=0; i<num; i++){
       cartas.innerHTML += `<div><img src="./assets/front.png"></div>` ;
    }         
}