let nomeHeroi = "Goku"
let xp = 10001
let formaSaiyajin = ""

if(xp <= 1000){
    formaSaiyajin = "Kaioken"
}else if(xp >= 1001 && xp <= 2000 ){
    formaSaiyajin = "Kaioken x3"
}else if(xp >= 2001 && xp <= 5000 ){
    formaSaiyajin = "Kaioken x20"
}else if(xp >= 5001 && xp <= 7000 ){
    formaSaiyajin = "Super Saiyajin"
}else if(xp >= 7001 && xp <= 8000 ){
    formaSaiyajin = "Super Saiyajin Nível 2"
}else if(xp >= 8001 && xp <= 9000 ){
    formaSaiyajin = "Super Saiyajin Nível 3"
}else if(xp >= 9001 && xp <= 10000 ){
    formaSaiyajin = "Deus Super Saiyajin"
}else{
    formaSaiyajin = "Deus Super Saiyajin Blue"
}

console.log("O guerreiro Goku está no nível: " + formaSaiyajin)
