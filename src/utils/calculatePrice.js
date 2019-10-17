import trimDecimals from './trimDecimals'

const calculatePrice = (EUR, USD) => (EUR && USD) && trimDecimals(EUR * USD)

export default calculatePrice
