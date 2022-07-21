// EXAMPLE
//
//sendLamports("/home/user/keypair.json","ATKcvtbtgXExHd3xZqb97M3Ab1jg2NZ8ztL8fCRJU2N1",1000000);

let web3 = require('@solana/web3.js');


/**
 * Function for sending lamports to target wallet
 * @param {*} KeypairArg path to keypair file
 * @param {*} TargetArg target wallet pubkey base58 string
 * @param {*} LamportsArg amount of SOL to be send in lamports
 */
function sendLamports(KeypairArg, TargetArg, LamportsArg) {

    // read source wallet keypair
    const keypair = require(KeypairArg);
    let slicedJsonData = keypair.slice(0,32);
    let wallet = web3.Keypair.fromSeed(Uint8Array.from(slicedJsonData));
    let sourcePubkey = wallet.publicKey;

    // target wallet address
    const targetPubkey = new web3.PublicKey(TargetArg);

    // Amount of transfered lamports
    let lampAmount = LamportsArg;

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
    let connection = new Connection(clusterApiUrl('mainnet-beta'));
    sendAndConfirmTransaction(
    connection,
    transaction,
    [wallet]
    );

    console.log("DONE");

}
