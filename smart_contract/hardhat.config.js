//https://eth-ropsten.alchemyapi.io/v2/YbE-e5LsUcF3kuc1mxf220axuWuPdxno
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/YbE-e5LsUcF3kuc1mxf220axuWuPdxno',
      accounts: [ 'df9a05a51aa11e2c1976b8a04ef6c9d2bfedc8993cd91d6dc8e09689c0645716']
    }
  }
}