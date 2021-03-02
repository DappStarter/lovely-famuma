require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rebel mad push hope another army gather'; 
let testAccounts = [
"0xaeb47c0afa93e5cf8ec9581313a88bc215ed6a3323586d0df57fbfdb6e176c76",
"0xb4a7f2def612bf32bfd51f2e005fa5352a4572c39877f6b0e0de57811507d9e5",
"0x80445ecca2375591ca00423f537cbc3d0edf5beaa5fce98aac70970b90ee01bb",
"0x596de01d9d6e7155eb609b987670f69fbf641b7fa5f516fdd44ebc56dbbbcde1",
"0x7032c637a25a0f8fa6b179feae889f5e33a5d5f6513681b1d3eb2e2d8339fcff",
"0xf4734b8c5dc90b16297e60ce2125792c5dcd9fe9204730537511a29f4343491a",
"0xa3848ccae86f99c26a0585d0a730ae434d2bdc796e37ceb14688571c52016ad9",
"0xb2ec9f7c254a022cb3a98315fbd3d70ca814aac84fd4645d09d70ea31319c369",
"0xa655fc5c015f6b26292a23e4f8723e60e31701066e8bf59d7757c71664eedca0",
"0x26ac6987917854bc2374a2ae110dca1da5e7fc32f88ecc2b15d64622b35f9e23"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
