const Passenger = require ('./Passenger')
describe ('Passenger', () => {
    let testPassenger = new Passenger('Deborah')
    test('Passenger has a name', () => {
  expect(testPassenger.name).toBe('Deborah');
    })
})