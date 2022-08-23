const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmTTdszstBX7sQjjUB8NuvjZuaC9aRAyVG6k5WiUi8xK9e","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmZ4zn8TLVS7qykaGBFi7VpnDcDMRrQwFfN9vSqneNXmKY","300000000000000000", {value: "25000000000000000",from: accounts[0]})