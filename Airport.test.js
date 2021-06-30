const Airport = require('./Airport')
describe ('Airport', () => {
    let testAirport = new Airport('DFW')
    test('airport has a name', () => {
  expect(testAirport.name).toBe('DFW');
    })

    test('airport has plane', () => {
        expect(Array.isArray(testAirport.planes)).toBe(true);
          })


    test('airport can add plane', () => {
        testAirport.addPlane('starstrek jj plane')
         expect(testAirport.planes.length).toBe(1);
              })

})


    
