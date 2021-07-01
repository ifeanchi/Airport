const Person = require('./Person')
class Crew extends Person {
    constructor (name) {
        super(name)
    }

    serveDrinks() {
        return 'can i serve you some water?'
    }
}
module.exports = Crew