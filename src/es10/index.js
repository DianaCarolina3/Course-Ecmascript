let array = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(2))



let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))


//elimina espacios de strings
let hello = '         hello world'
console.log(hello)
console.log(hello.trimStart())

let hello = 'hello world            '
console.log(hello)
console.log(hello.trimEnd())

let hello = '        hello world            '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())


try {
  
} catch {
  error
}

//se convierte a objeto y valor
let entries = [["name","oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))


let mySymbol = 'my symbol'
let symbol = Symbol(mySymbol)
console.log(Symbol.description)