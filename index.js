//Código feito com base em um dos meus personagens favoritos.
//formaSaiyajin = Patente do Herói
//PDL = Experiência do Herói

let heroi = "Goku"
let formaSaiyajin = "Deus Super Saiyajin Super Saiyajin"

switch(formaSaiyajin){
    case "Kaioken":
        console.log("PDL 10.000")
        break
    case "Kaioken x3":
        console.log("PDL 35.000")
        break
    case "Kaioken x20":
        console.log("PDL 180.000")
        break
    case "Super Saiyajin":
        console.log("PDL 150.000.000")
        break
    case "Super Saiyajin 2":
        console.log("PDL 300.000.000")
        break
    case "Super Saiyajin 3":
        console.log("PDL 1.200.000.000.000")
        break
    case "Deus Super Saiyajin":
        console.log("PDL 500.000.000.000.000")
        break
    default:
    console.log("PDL 100.000.000.000.000.001")
}

console.log("Goku está no nível: " + formaSaiyajin)
