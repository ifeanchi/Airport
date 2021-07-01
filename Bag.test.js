const Bag = require('./Bag')

describe ('Bag', () => {
    let testBag = new Bag(25)
    test('bags has a weight', () => {
  expect(testBag.weight).toBe(25);
    })
})