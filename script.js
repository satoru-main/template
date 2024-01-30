const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TBBBE65OSR32BHEO2O3NG2JRSJRPSLOQMBDV2DY")
const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()