let nomeHeroi = "Goku"
let pdl = 10001
let formaSaiyajin = ""

if(pdl <= 1000){
    formaSaiyajin = "Kaioken"
}else if(pdl >= 1001 && pdl <= 2000 ){
    formaSaiyajin = "Kaioken x3"
}else if(pdl >= 2001 && pdl <= 5000 ){
    formaSaiyajin = "Kaioken x20"
}else if(pdl >= 5001 && pdl <= 7000 ){
    formaSaiyajin = "Super Saiyajin"
}else if(pdl >= 7001 && pdl <= 8000 ){
    formaSaiyajin = "Super Saiyajin Nível 2"
}else if(pdl >= 8001 && pdl <= 9000 ){
    formaSaiyajin = "Super Saiyajin Nível 3"
}else if(pdl >= 9001 && pdl <= 10000 ){
    formaSaiyajin = "Deus Super Saiyajin"
}else{
    formaSaiyajin = "Deus Super Saiyajin Super Saiyajin"
}

console.log("O guerreiro Goku está no nível: " + formaSaiyajin)
