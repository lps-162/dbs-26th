const primes = [2, 3, 5, 7, 11, 13]


console.log(primes)

for(let i=0; i<primes.length; i++) {
    console.log("Prime " + i + " : " + primes[i] * primes[i])

}

for (const num of primes) {
    console.log(num)
}

function printNum(p) {
    console.log(p)
}

console.log("Functional approach")
primes.forEach(printNum)

const squareOfPrimes = []
for (let p of primes) {
    squareOfPrimes.push(p * p)
}

console.log("Iterative : ", squareOfPrimes)

function calcSquare(p) {
    return p * p
}

function calcCube(p) {
    return p * p * p
}

const newArr = primes.map(n => n * n * n)

console.log("Functional : ", newArr)

const liTags = primes.map(n => "<li>" + n + "</li>")
console.log(liTags)

const names = ["shivan", "venkat", "virren"]
const upperCaseNames = names.map(name => name.toUpperCase())
console.log(upperCaseNames)


const hetArr = [134, "Shivan", "Venkat", 234, [], {}, true]
const typeArr = hetArr.map(e => typeof(e))
console.log(typeArr)