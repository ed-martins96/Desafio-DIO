//Código feito com base em um dos meus personagens favoritos.
//formaSaiyajin = Patente do Herói
//PDL = Experiência do Herói

let heroi = "Goku"
let formaSaiyajin = "Deus Super Saiyajin Super Saiyajin"

switch(formaSaiyajin){
    case "Kaioken":
        console.log("PDL 10000")
        break
    case "Kaioken x3":
        console.log("PDL 35000")
        break
    case "Kaioken x20":
        console.log("PDL 180000")
        break
    case "Super Saiyajin":
        console.log("PDL 1500000")
        break
    case "Super Saiyajin 2":
        console.log("PDL 300000")
        break
    case "Super Saiyajin 3":
        console.log("PDL 12000000")
        break
    case "Deus Super Saiyajin":
        console.log("PDL 50000000")
        break
    default:
    console.log("PDL 10000001")
}

console.log("Goku está no nível: " + formaSaiyajin)
