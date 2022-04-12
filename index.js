let pilotName = prompt("Qual o nome do piloto?");
let velInitial = 0;
let askVel = prompt("Você gostaria de ir a qual velocidiade?");
let confirmVel = confirm("Voce quer ir a " + askVel + "Km/h mesmo?");

console.log(pilotName);
console.log(askVel);
console.log(confirmVel);
velInitial = askVel;
alert("Sua velocidade atual é de " + velInitial + "km/h");

if(velInitial < 0){
    alert("A nave esta parada. Considere partir e aumentar a velocidade!");
}else if(velInitial < 40){
    alert("Você está devagar, podemos aumentar mais");
}else if(velInitial >= 40 && velInitial < 80){
    alert("Parece uma boa velocidade para manter");
}else if(velInitial >= 80 || velInitial <= 100){
    alert("Velocidade alta. Considere diminuir");
}else if(velInitial >= 100){
    alert("Velocidade perigosa. Controle automático forçado.");
}

alert("Nome do piloto: " + pilotName + "\nVelocidade atual: " + velInitial + "km/h");