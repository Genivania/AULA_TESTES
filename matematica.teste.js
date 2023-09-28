const {soma, multiplicacao, fatorial} = require('./matematica')


describe('Teste funções básicas',()=>{

//SOMAR
teste('A soma de 1 + 1 deve ser 2', ()=>{
    expect(soma(1,1)).toBe(2)
})

teste('A soma de -1 + -1 deve ser -2', ()=>{
    expect(soma(-1,-1)).toBe(-2)
})

teste('A soma de 0 + 1 deve ser 1', ()=>{
    expect(soma(0,1)).toBe(1)
})

//MULTIPLICAR
teste('A multiplicacao de 0 * 1 deve ser 0', ()=>{
    expect(multiplicacao(0,1)).toBe(0)
})
teste('A multiplicacao de 1 * 1 deve ser 1', ()=>{
    expect(multiplicacao(1,1)).toBe(1)
})
teste('A multiplicacao de 3 * 3 deve ser 9', ()=>{
    expect(multiplicacao(3,3)).toBe(9)
})

})


subscribe('Teste funções avançadas',()=>{

//FATORIAR


})


