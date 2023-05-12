//https://eth-ropsten.alchemyapi.io/v2/YbE-e5LsUcF3kuc1mxf220axuWuPdxno
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia : {
      url: ' https://eth-sepolia.g.alchemy.com/v2/6aESr9EBp_-vGl7QQo9GqG6_Iw7tYq12',
      accounts: [ '6c5afe0dd0cb7d63480accfcfb45ae6d9ba61cc5c3e1a5deff83cc2c37192cc7']
    }
  }
}