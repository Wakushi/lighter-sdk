import { ethers } from "ethers"
import { ZKLIGHTER_ABI } from "../abis/ZkLighter"
import * as dotenv from "dotenv"

dotenv.config()

// Constants
const ZKLIGHTER_CONTRACT_ADDRESS = "0x3B4D794a66304F130a4Db8F2551B0070dfCf5ca7"
const USDC_DECIMALS = 6

const ETHEREUM_MAINNET_RPC = process.env.ETH_MAINNET_RPC_URL

async function listenForDepositEvent() {
  if (!ETHEREUM_MAINNET_RPC) {
    throw new Error("ETHEREUM_MAINNET_RPC environment variable is required.")
  }

  console.log("=".repeat(60))
  console.log("Listening for Deposit Events")
  console.log("=".repeat(60))
  console.log(`RPC URL: ${ETHEREUM_MAINNET_RPC}`)
  console.log(`zkLighter Contract: ${ZKLIGHTER_CONTRACT_ADDRESS}`)
  console.log("")
  console.log("Waiting for Deposit events...")
  console.log("(Press Ctrl+C to stop)")
  console.log("")

  try {
    const provider = new ethers.JsonRpcProvider(ETHEREUM_MAINNET_RPC)

    console.log("Testing RPC connection...")
    const network = await provider.getNetwork()
    console.log(
      `✅ Connected to network: ${network.name} (chainId: ${network.chainId})`
    )
    console.log("")

    const zkLighterContract = new ethers.Contract(
      ZKLIGHTER_CONTRACT_ADDRESS,
      ZKLIGHTER_ABI,
      provider
    )

    zkLighterContract.on(
      "Deposit",
      (toAccountIndex, toAddress, amount, event) => {
        console.log("")
        console.log("🎉 Deposit event received!")
        console.log("-".repeat(60))
        console.log(`Account Index: ${toAccountIndex.toString()}`)
        console.log(`Recipient Address: ${toAddress}`)
        console.log(`Amount: ${ethers.formatUnits(amount, USDC_DECIMALS)} USDC`)
        console.log(`Block Number: ${event.log.blockNumber}`)
        console.log(`Transaction Hash: ${event.log.transactionHash}`)
        console.log("-".repeat(60))
        console.log("")
      }
    )

    // Example of a Deposit event
    // 🎉 Deposit event received!
    // ------------------------------------------------------------
    // Account Index: 253044
    // Recipient Address: 0x723B19c84C8BaC385556d57929F60160d1A164f2
    // Amount: 37.899989 USDC
    // Block Number: 23890469
    // Transaction Hash: 0x45b9b1ef5cc07037d9067ea23880f7a6844fa3cb946300e4d37103e3867278c9
    // ------------------------------------------------------------

    // Keep the process alive
    console.log("✅ Event listener active. Listening for events...")
    console.log("")
  } catch (error: any) {
    if (
      error.code === "ECONNREFUSED" ||
      error.message?.includes("ECONNREFUSED")
    ) {
      throw new Error(
        `Failed to connect to RPC endpoint: ${ETHEREUM_MAINNET_RPC}\n` +
          "Please check:\n" +
          "1. The RPC URL is correct\n" +
          "2. The RPC endpoint is accessible\n" +
          "3. You have internet connectivity"
      )
    }
    throw error
  }
}
