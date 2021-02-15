const data = {
  fontend: 'Oscar',
  backend: 'Matias',
  design: 'Julia',
  dataScience: 'Diana'
}
//me genera una matriz = un array
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const data = {
  fontend: 'Oscar',
  backend: 'Matias',
  design: 'Julia',
  dataScience: 'Diana'
}
//me devuelve solo el valor = los strings
const values = Object.values(data)
console.log(values)
console.log(values.length)


//Async await  //esta en false pasar a true para validar
const helloWorld = () => {
  return new Promise ((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve(`Hello world`), 3000)
      : reject (new Error('test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}
helloAsync()


const anotherFunction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}
anotherFunction()