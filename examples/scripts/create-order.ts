import { SignerClient } from "../../src/signer"
import { Configuration, OrderApi, TransactionApi } from "../../src"
import { MAINNET_BASE_URL } from "../../constants"

const BASE_URL = MAINNET_BASE_URL
const API_KEY_PRIVATE_KEY = process.env.API_KEY_PRIVATE_KEY
const ACCOUNT_INDEX = process.env.ACCOUNT_INDEX
const API_KEY_INDEX = process.env.API_KEY_INDEX

async function main() {
  if (!API_KEY_PRIVATE_KEY || !API_KEY_INDEX || !ACCOUNT_INDEX) {
    console.error(
      "API_KEY_PRIVATE_KEY, API_KEY_INDEX, and ACCOUNT_INDEX are required"
    )

    process.exit(1)
  }

  const accountIndex = parseInt(ACCOUNT_INDEX)
  const apiKeyIndex = parseInt(API_KEY_INDEX)

  const configuration = new Configuration({
    basePath: BASE_URL,
  })

  const orderInstance = new OrderApi(configuration)
  const transactionInstance = new TransactionApi(configuration)

  const symbol = "SOL"

  const { data } = await orderInstance.orderBooks()
  const market = data.order_books.find((market) => market.symbol === symbol)

  if (!market) {
    console.error(`Market not found for symbol: ${symbol}`)
    process.exit(1)
  }

  const { data: marketData } = await orderInstance.orderBookDetails(
    market.market_id
  )

  const marketDetails = marketData.order_book_details[0]
  const price = marketDetails.last_trade_price

  console.log(`Price: ${price}`)

  const client = new SignerClient(
    BASE_URL,
    API_KEY_PRIVATE_KEY,
    apiKeyIndex,
    accountIndex
  )

  const { data: nonceData } = await transactionInstance.nextNonce(
    accountIndex,
    apiKeyIndex
  )

  const nonce = nonceData.nonce

  console.log(
    `Opening ${symbol} market order at $${price} (nonce: ${nonce})...`
  )

  try {
    const [order, tx, errMsg] = await client.create_market_order(
      market.market_id, // market_index
      0, // client_order_index
      4, // base_amount: 0.1 ETH
      price, // avg_execution_price -- worst acceptable price for the order
      false, // is_ask
      false, // reduce_only
      nonce,
      apiKeyIndex
    )

    if (errMsg) {
      console.error(`Error creating order: ${errMsg}`)
      return
    }

    console.log(`Order: ${JSON.stringify(order)}`)
    console.log("Create Order Tx:", tx)
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}

main()
