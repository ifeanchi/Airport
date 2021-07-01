const Person = require('./Person')

class Passenger extends Person {
    constructor (name, ticketNum){
    super (name)
    this.ticketNum = ticketNum
    }
}

module.exports = Passenger