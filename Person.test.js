const Person = require ('./Person')
describe ('person', () => {
    let testPerson = new Person ('Deborah')
    test('Person has a name', () => {
  expect(testPerson.name).toBe('Deborah');
    })
})