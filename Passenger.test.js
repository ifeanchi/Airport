const Passenger = require ('./Passenger')
const Person = require ('./Person')
describe ('Passenger object', () => {
    let testPassenger = new Passenger ('Gloria', '567')
    test('Passenger has a name', () => {
  expect(testPassenger.name).toBe('Gloria');
    })

    test('Passenger is a person', () => {
        expect(testPassenger instanceof Person).toBeTruthy
    })

    test('Passenger can use the restroom', () => {
        expect(testPassenger.useRestRoom()).toBe('flussssh!')
    })

    test('Passenger can request for a drink', () => {
        expect(testPassenger.requestForDrink()).toBe ('can i have a glass of wine please?')
    })

    test('Passenger has a bag that has weight', () => {
        expect(testPassenger.weight).toBeTruthy
    })

    test ('Passenger has a ticket number', () => {
        expect(testPassenger.ticketNum).toBe('567')
    })
})