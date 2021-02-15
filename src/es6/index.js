function newFuntion (name, age, country) {
  var name = name || 'Diana'
  var age = age || 17
  var country = country || 'Colombia'
  console.log(name, age, country)
}

//es6

function newFunction2(name = 'oscar', age = 32, country = 'Colombia') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('ricard', 1 ,'MX')

let hello = 'hello'
let world = 'world'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)



let lorem = 'lorem ips fdfd fdf df fdf \n'
+ 'hsjfhjshf fdf sfsdg df sd sfddf.'

//es6

let lorem2 = `otra frase esrsnfksf df sf
sfsfsfdgdsgdsg.
`
console.log(lorem)
console.log(lorem2)

//es6
let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'Colombia'
}
console.log(person.name, person.age, person.country)

let { age, country } = person
console.log(age, country)

//
let team1 = ['camila', 'jose', 'julian', 'maria']
let team2 = ['samanta', 'yesica', 'carlos', 'david']
// unifico todos los arrays de team1 + team2
let education =['juan', 'luis', ...team1, ...team2]
console.log(education)


let names = [
  {name: 'Camilo', age: 12},
  {name: 'Isabel', age: 46}
]

let getOfNames = names.map (item => console.log(item.name));

let square = num => num * num


//promise
let helloPromise = () => {
  return new Promise ((resolve, reject) => {
    if (true) {
      resolve(`Hey!!!`)
    } else {
      reject(`Upps!`)
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log(`Hello`))
  .then(error => console.log(error))


//class
class calcutator {
  constructor () {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return valueA + valueB
  }
}

const CALC = new calcutator()
console.log(CALC.sum(4, 50))


//imports
import { hello } from  './module'
hello()


//generators
function* helloWorld() {
  if (true){
    yield 'Hello, '
  }
  if (true){
    yield 'World'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
