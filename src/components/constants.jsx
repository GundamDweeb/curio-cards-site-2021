import card1 from "../images/cards/01.jpg"
import card2 from "../images/cards/02.jpg"
import card3 from "../images/cards/03.jpg"
import card4 from "../images/cards/04.jpg"
import card5 from "../images/cards/05.jpg"
import card6 from "../images/cards/06.jpg"
import card7 from "../images/cards/07.jpg"
import card8 from "../images/cards/08.jpg"
import card9 from "../images/cards/09.jpg"
import card10 from "../images/cards/10.jpg"
import card11 from "../images/cards/11.jpg"
import card12 from "../images/cards/12.jpg"
import card13 from "../images/cards/13.jpg"
import card14 from "../images/cards/14.jpg"
import card15 from "../images/cards/15.jpg"
import card16 from "../images/cards/16.jpg"
import card17 from "../images/cards/17.jpg"
import card18 from "../images/cards/18.jpg"
import card19 from "../images/cards/19.jpg"
import card20 from "../images/cards/20.jpg"
import card21 from "../images/cards/21.png"
import card22 from "../images/cards/22.png"
import card23 from "../images/cards/23.gif"
import card24 from "../images/cards/24.jpg"
import card25 from "../images/cards/25.jpg"
import card26 from "../images/cards/26.jpg"
import card27 from "../images/cards/27.jpg"
import card28 from "../images/cards/28.jpg"
import card29 from "../images/cards/29.jpg"
import card30 from "../images/cards/30.gif"

export const cardImages = {
  1: card1,
  2: card2,
  3: card3,
  4: card4,
  5: card5,
  6: card6,
  7: card7,
  8: card8,
  9: card9,
  10: card10,
  11: card11,
  12: card12,
  13: card13,
  14: card14,
  15: card15,
  16: card16,
  17: card17,
  18: card18,
  19: card19,
  20: card20,
  21: card21,
  22: card22,
  23: card23,
  24: card24,
  25: card25,
  26: card26,
  27: card27,
  28: card28,
  29: card29,
  30: card30
};

export const wrapperAddr = "0x73da73ef3a6982109c4d5bdb0db9dd3e3783f313";

export const curioAddresses = {
    "CRO1": "0x6aa2044c7a0f9e2758edae97247b03a0d7e73d6c",
    "CRO2": "0xe9a6a26598b05db855483ff5ecc5f1d0c81140c8",
    "CRO3": "0x3f8131b6e62472ceea9cb8aa67d87425248a3702",
    "CRO4": "0x4f1694be039e447b729ab11653304232ae143c69",
    "CRO5": "0x5a3d4a8575a688b53e8b270b5c1f26fd63065219",
    "CRO6": "0x1ca6ac0ce771094f0f8a383d46bf3acc9a5bf27f",
    "CRO7": "0x2647bd8777e0c66819d74ab3479372ea690912c3",
    "CRO8": "0x2fce2713a561bb019bc5a110be0a19d10581ee9e",
    "CRO9": "0xbf4cc966f1e726087c5c55aac374e687000d4d45",
    "CRO10": "0x72b34d637c0d14ace58359ef1bf472e4b4c57125",
    "CRO11": "0xb36c87f1f1539c5fc6f6e7b1c632e1840c9b66b4",
    "CRO12": "0xd15af10a258432e7227367499e785c3532b50271",
    "CRO13": "0x2d922712f5e99428c65b44f09ea389373d185bb3",
    "CRO14": "0x0565ac44e5119a3224b897de761a46a92aa28ae8",
    "CRO15": "0xdb7f262237ad8acca8922aa2c693a34d0d13e8fe",
    "CRO16": "0x1b63532ccb1fee0595c7fe2cb35cfd70ddf862cd",
    "CRO17": "0xf59536290906f204c3c7918d40c1cc5f99643d0b",
    "CRO18": "0xa507d9d28bbca54cbcffad4bb770c2ea0519f4f0",
    "CRO19": "0xf26bc97aa8afe176e275cf3b08c363f09de371fa",
    "CRO20": "0xd0ec99e99ce22f2487283a087614aee37f6b1283",
    "CRO21": "0xb7a5a84ff90e8ef91250fb56c50a7bb92a6306ee",
    "CRO22": "0x148ff761d16632da89f3d30ef3dfe34bc50ca765",
    "CRO23": "0xcde7185b5c3ed9ea68605a960f6653aa1a5b5c6c",
    "CRO24": "0xe67dad99c44547b54367e3e60fc251fc45a145c6",
    "CRO25": "0xc7f60c2b1dbdfd511685501edeb05c4194d67018",
    "CRO26": "0x1cb5bf4be53eb141b56f7e4bb36345a353b5488c",
    "CRO27": "0xfb9f3fa2502d01d43167a0a6e80be03171df407e",
    "CRO28": "0x59d190e8a2583c67e62eec8da5ea7f050d8bf27e",
    "CRO29": "0xd3540bcd9c2819771f9d765edc189cbd915feabd",
    "CRO30": "0x7f5b230dc580d1e67df6ed30dee82684dd113d1f"
};

export const erc20Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ipfs_hash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"desc","type":"string"}],"name":"setDescription","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isLocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lock","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenDescription","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

export const wrapperAbi = '[{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"uri","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_quantity","type":"uint256"}],"name":"wrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_ids","type":"uint256[]"},{"name":"_values","type":"uint256[]"},{"name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ids","type":"uint256[]"},{"name":"_quantities","type":"uint256[]"}],"name":"wrapBatch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_quantity","type":"uint256"}],"name":"unwrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ids","type":"uint256[]"},{"name":"_quantities","type":"uint256[]"}],"name":"unwrapBatch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"proxyRegistryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"metadatas","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_id","type":"uint256"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_proxyRegistryAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_operator","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"uint256"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_operator","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_ids","type":"uint256[]"},{"indexed":false,"name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"string"},{"indexed":true,"name":"_id","type":"uint256"}],"name":"URI","type":"event"}]'
