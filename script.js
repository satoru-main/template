const symbol = require('/node_modules/symbol-sdk')

const GENERATION_HASH = '49D6E1CE276A85B70EAFE52349AACCA389302E7A9754BCF1221E79494FC665A4'
const EPOCH = 1667250467
const XYM_ID = '72C0212E67A08BCE'
const NODE_URL = 'https://sym-test-03.opening-line.jp:3001'
const NET_TYPE = symbol.NetworkType.TEST_NET

const address = symbol.Address.createFromRawAddress("TBBBE65OSR32BHEO2O3NG2JRSJRPSLOQMBDV2DY")
const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

const repositoryFactory = new symbol.RepositoryFactoryHttp(NODE_URL)
const accountHttp = repositoryFactory.createAccountRepository()

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === XYM_ID) {
        const dom_xym = document.getElementById('wallet-xym')
        dom_xym.innerText = `XYM Balance : ${m.amount.compact() / Math.pow(10, 6)}`
      }
    }
  })