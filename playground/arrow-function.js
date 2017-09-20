var square = (x) => x * x

var user = {
    name: 'Nir',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`)
        console.log(arguments)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`)
    }
}


console.log(square(123.1230000000000000000999999999999))
user.sayHiAlt(1, 2, 3)
user.sayHi(1, 2, 3)