// const obj = {
//   name: 'oscar',
//   age: 32,
//   country: 'mx'
// }

// //en capsular todo en una variable del mismo objeto
// let { name, ...all } = obj
// console.log(name,all)

const obj0 = {
  name: 'oscar',
  age: 32,
}
const obj1 = {
  ...obj0,
  country: 'mx'
}
console.log(obj1)



const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve ('Hello world') , 3000)
    : reject(new Error('test error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))



  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2021-02-15')
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day)



  //promise
  const GreetPeople = () => {
    return new Promise ((resolve, reject) => {
      (true)
      ? setTimeout(() => {
        resolve('Hello everybody')
      }, 2000)
      : reject(new error('test error'))
    })
  }

  GreetPeople()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finished'))