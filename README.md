# solana-transaction-js
simple javascript code for sending solana from existing wallet to target address

<h2>function arguments</h2>

  * path to sender-keypair file
  
  * target public address (base 58 string)
  
  * amount of lamports to send (1 SOL = 1,000,000,000 lamps)
  
<h2>example</h2>

  * send 1,000,000 lamports (0.001 SOL) to account ATKcvtbtgXExHd3xZqb97M3Ab1jg2NZ8ztL8fCRJU2N1

  `sendLamports("/home/user/keypair.json", "ATKcvtbtgXExHd3xZqb97M3Ab1jg2NZ8ztL8fCRJU2N1", 1000000);`
  
