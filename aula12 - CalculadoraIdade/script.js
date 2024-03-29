/* function calcularIdade() {
    let dia1 = document.getElementById('dia').value
    let mes1 = document.getElementById('mes').value
    let ano1 = document.getElementById('ano').value

    let data = new Date()
    let dia2 = data.getDate()
    let mes2 = 1 + data.getMonth()
    let ano2 = data.getFullYear()

    let quantidadeDiasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (dia1 > dia2) {
        dia2 = dia2 + quantidadeDiasMes[mes2 - 1]
        mes2 = mes2 - 1
    }

    if (mes1 > mes2) {
        mes2 = mes2 + 12 // 03 + 12 = 15
        ano2 = ano2 - 1 // 2023 - 1 = 2022 + 3
    }

    let dia = dia2 - dia1 //14 - 06 = 8
    let mes = mes2 - mes1 //15 -  = 
    let ano = ano2 - ano1

    document.getElementById('idade').innerText = `Você tem ${ano} anos e ${mes} meses e ${dia} dias`
} */


//https://dev.to/code_mystery/javascript-age-calculator-calculate-age-from-date-of-birth-o9b

function calcularIdade (year, month, day) {
    const birth = new Date(year, month - 1, day)
    const now = new Date()
    const diff = new Date(now.valueOf() - birth.valueOf())
    return Math.abs(diff.getFullYear() - 1970)
}
