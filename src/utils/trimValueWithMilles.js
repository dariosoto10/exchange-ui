const trimValueWithMilles = (nStr) => {
  if (nStr) {
    let valueBeforePoint = nStr.substr(0, nStr.indexOf('.'))
    let valueAfterPoint = nStr.substr(nStr.indexOf('.'), nStr.length)
    valueBeforePoint += ''
    let x = valueBeforePoint.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? ',' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1,$2')
    }
    return x1 + x2 + valueAfterPoint
  }
  return
}

export default trimValueWithMilles
