// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(euro){
    // convertimos el valor a dolares
    let valueInDollar = Math.round(euro*1.2*Math.pow(10,2)+(1)) /Math.pow(10, 2).toFixed(2);
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(dollar){
    let valueInYen = Math.round(dollar*oneEuroIs.JPY*Math.pow(10,2)+(1)) /Math.pow(10, 2).toFixed(2)
    return valueInYen;
}
let fromYanToPound = function(yen){
    let valueInPound = Math.round(yen*oneEuroIs.GBP*Math.pow(10,2)+(1)) /Math.pow(10, 2).toFixed(2);
    return valueInPound;
};
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let FromEuroToDollar = (euro) => {
    return Math.round(euro*oneEuroIs.USD*Math.pow(10,2)+(1)) /Math.pow(10, 2).toFixed(2)
};
let FromDollarToYen = (dollar) => {
    return Math.round(dollar*oneEuroIs.JPY*Math.pow(10,2)+(1)) /Math.pow(10, 2).toFixed(2)
};
let FromYanToPound = (yen) => {
    return Math.round(yen*oneEuroIs.GBP*Math.pow(10,2)+(1)) /Math.pow(10, 2).toFixed(2)
};
 
console.log('Tengo',FromEuroToDollar(1),'$ Dolares');
console.log('Tengo',FromDollarToYen(1),'¥ Yenes');
console.log('Tengo',FromYanToPound(1),'£ Libras Esterlinas');

module.exports = {fromEuroToDollar, fromDollarToYen, fromYanToPound};