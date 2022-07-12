let web3 = require('@solana/web3.js');

// read source wallet keypair
const keypair = require('/path/keypair.json'); // TODO: EDIT
let slicedJsonData = keypair.slice(0,32);
let wallet = web3.Keypair.fromSeed(Uint8Array.from(slicedJsonData));
let sourcePubkey = wallet.publicKey;

// target wallet address
const targetPubkey = new web3.PublicKey("HpiQyjcQk5KWDYTpSDvwbQxSfH6u7AfnneaNfdymZU6P"); // TODO: EDIT

// Amount of transfered lamports
let lampAmount = 5000; // TODO: EDIT

// sum print
console.log("sending from: " + sourcePubkey);
console.log("sending to: " + targetPubkey);
console.log("Amount: " + lampAmount + " lamports");

// create transaction
const {Transaction, SystemProgram, LAMPORTS_PER_SOL} = require("@solana/web3.js");
let transaction = new Transaction();
transaction.add(
  SystemProgram.transfer({
    fromPubkey: sourcePubkey, // sending sol from
    toPubkey: targetPubkey, // sending sol to
    lamports: lampAmount // amount of lamports to send
  }) 
);

// connect to cluster, sign and send transaction
const {sendAndConfirmTransaction, clusterApiUrl, Connection} = require("@solana/web3.js");
let connection = new Connection(clusterApiUrl('mainnet-beta')); // can be changed to testnet or devnet
sendAndConfirmTransaction(
  connection,
  transaction,
  [wallet]
);
