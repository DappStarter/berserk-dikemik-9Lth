require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note museum coin grace hero food ghost'; 
let testAccounts = [
"0x3f3cb569edd8eda1836dd8754d5489ebe384474dbb090c92c90e42fc23ba6955",
"0x7ac65190be5169251e37f793f9869c181fc82e1f6aa65bf25b75eeefa8f41d46",
"0x3b52e1a260f6070cbd5906d1824196b3cb88035be94dd736aded8757bac79356",
"0xea94bcaac6445bd35800ff5f147fa69fccd163d30b214556294de9b33d233d05",
"0x659e92ef1f5f3fe33ea2f42d0eca190014cabdd48c98c1daecb0f07da4499244",
"0xe35ef6ef6650545d6f66f4afe216b888e821545776ba617d4ce36677e27b6f0b",
"0x3dee31a80f27fdf9849307d1b323f6cfb6d89622aa73f32b0568a41e68ee64b3",
"0x20132e5662db3206b673c8de4d939a69628d681aec79c7c4d3b9ae5f0842041d",
"0x2f126c166b9c65a5962e2ad35a9e65f9e8260b70714a4756f780d2890e0928aa",
"0x42ab453efec47035e5a25d4e9f8f01cf08ea21c2e24ea104700b50c0122f4e31"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

