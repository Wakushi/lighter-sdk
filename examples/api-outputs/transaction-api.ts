// const transactionInstance = new TransactionApi(configuration)

// Get next nonce for a specific account and api key
// transactionInstance.nextNonce(<account_index>, <api_key_index>)

const nextNonce = {
  code: 200,
  nonce: 8,
}

// Get transaction by hash or sequence index
// transactionInstance.tx(TxByEnum.Hash, <value>)

const tx = {
  code: 200,
  hash: "2f24824fa2ae3f4fe522ade5ac45d519492ea716f3241ca23cd561b5c661b212f50f3c283797167d",
  type: 14,
  info: '{"AccountIndex":410044,"ApiKeyIndex":0,"MarketIndex":0,"ClientOrderIndex":0,"BaseAmount":29,"Price":341754,"IsAsk":0,"Type":1,"TimeInForce":0,"ReduceOnly":0,"TriggerPrice":0,"OrderExpiry":0,"ExpiredAt":1762898497190,"Nonce":2,"Sig":"590+gPUvFQ9qrCdH+o/ylZoWn7K31JWqLSr+79fIETVjjtiNE1mDX1ClHEFtL6kg1kQ8CeSWF2a2sa9bnXSodmCuTlrurp2v5cb40nrr5zU="}',
  event_info:
    '{"m":0,"t":{"p":340598,"s":29,"tf":0,"mf":20},"mo":{"i":281475554237504,"u":4294973669,"a":35538,"is":29400,"p":340598,"rs":29371,"ia":1,"ot":0,"f":2,"ro":0,"tp":0,"e":1762898397684,"st":2,"ts":0,"t0":0,"t1":0,"c0":0},"to":{"i":562949412895326,"u":0,"a":410044,"is":29,"p":341754,"rs":0,"ia":0,"ot":1,"f":0,"ro":0,"tp":0,"e":0,"st":3,"ts":0,"t0":0,"t1":0,"c0":0},"ae":""}',
  status: 3,
  transaction_index: 358,
  l1_address: "0x0435b1aE398D3FD9035142d529B20dd0Cf722eD7",
  account_index: 410044,
  nonce: 2,
  expire_at: 1762898497190,
  block_height: 92080799,
  queued_at: 1762897898683,
  sequence_index: 25370542209,
  parent_hash: "",
  committed_at: 0,
  verified_at: 0,
  executed_at: 1762897898555,
}
