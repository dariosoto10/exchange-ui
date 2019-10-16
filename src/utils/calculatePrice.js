const calculatePrice = (EUR, USD) => (EUR && USD) && parseFloat((EUR * USD).toFixed(4))

export default calculatePrice
