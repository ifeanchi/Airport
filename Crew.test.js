const Crew = require('./Crew')
const Person = require('./Person')
describe('Crew object', () => {
    const testcrewMember = new Crew('James')
    test('Crew member are people too', () => {
        expect(testcrewMember instanceof Person).toBeTruthy
    })

    test('Crew member can use the restroom also', () => {
        expect(testcrewMember.useRestRoom()).toBeTruthy
    })

    test('Crew member can serve drinks on flight', () => {
        expect(testcrewMember.serveDrinks()).toBe('can i serve you some water?')
    })
})