const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TBBBE65OSR32BHEO2O3NG2JRSJRPSLOQMBDV2DY")
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)