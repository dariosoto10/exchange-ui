import calculatePrice from '../calculatePrice'

const EUR = 10
const USD = 103

describe('#calculatePrice utils function', () => {
  it('should return EUR multiplied by USD', () => {
    let valueCalculated = Math.floor(calculatePrice(EUR, USD))
    let valueExpected = Math.floor(EUR * USD)
    expect(valueCalculated).toBe(valueExpected)
  })

  it('should return NaN if one of the values missing', () => {
    let valueCalculated = Math.floor(calculatePrice(EUR))
    expect(valueCalculated).toBe(NaN)
  })
})
