1. npm install
2. สร้างไฟล์ .evm.production 
```
NEXT_PUBLIC_NETWORK_ID=5   
NEXT_PUBLIC_TARGET_CHAIN_ID=5
NEXT_PUBLIC_PINATA_DOMAIN=https://gateway.pinata.cloud

SECRET_COOKIE_PASSWORD=asdopi1h23ocn1p23iu2pgpokwe2oi1ais

PINATA_API_KEY=12f8842f23f42f469ed4
PINATA_SECRET_API_KEY=c50881ac8267b6d568ceea8e09b194105d563f3893c03867bbe9b10f902b248c

INFURA_ROPSTEN_URL=https://goerli.infura.io/v3/4b33ab96264043278161855d52c26c0b
```
3. สร้างไฟล์ key.json
```
{
    "PRIVATE_KEY": "3c0961aa2454009ff9a53756d40b49a13415ae811acf83eb86ebb98a3edaab1a",
    "INFURA_ROPSTEN_URL": "https://goerli.infura.io/v3/4b33ab96264043278161855d52c26c0b"
}
```
4. npm run build
5. npm start
