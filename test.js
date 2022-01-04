// importar la función sum del archivo app.js
// const { sumar } = require('./app.js');

// comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sumar(14, 9);

//     esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test('1 euro should be 1.21',function(){
    const {fromEuroToDollar} = require('./app.js')
    expect(fromEuroToDollar(1)).toBe(1.21);
});

test('1 dollar should be 127.91', function(){
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(1)).toBe(127.91)
});

test('1 Yen should be 0.81', function(){
    const {fromYanToPound} = require('./app.js')
    expect(fromYanToPound(1)).toBe(0.81);
});

