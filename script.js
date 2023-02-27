const sheetId = '1LYZr2N1ZU7fzcVAnQf2IhvgQW8o2qwXJMxAa68cnpss'
const sheetName =  encodeURIComponent("Respostas ao formulário 1")
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

fetch(sheetURL)
.then((response) => response.text())
.then((csvText) => console.log(csvText))