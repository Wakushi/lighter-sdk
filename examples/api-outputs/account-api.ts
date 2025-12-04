// const accountInstance = new AccountApi(configuration)

// Get account by l1 address
// accountInstance.account(AccountByEnum.L1Address, L1_ADDRESS)

const accountByL1Address = {
  code: 200,
  total: 1,
  accounts: [
    {
      code: 0,
      account_type: 0,
      index: 410044,
      l1_address: "0x0435b1aE398D3FD9035142d529B20dd0Cf722eD7",
      cancel_all_time: 0,
      total_order_count: 0,
      total_isolated_order_count: 0,
      pending_order_count: 0,
      available_balance: "0.134993",
      status: 1,
      collateral: "4.991915",
      account_index: 410044,
      name: "",
      description: "",
      can_invite: false,
      referral_points_percentage: "",
      positions: [
        {
          market_id: 0,
          symbol: "ETH",
          initial_margin_fraction: "20.00",
          open_order_count: 0,
          pending_order_count: 0,
          position_tied_order_count: 0,
          sign: 1,
          position: "0.0029",
          avg_entry_price: "3405.98",
          position_value: "9.914955",
          unrealized_pnl: "0.037613",
          realized_pnl: "0.000000",
          liquidation_price: "1780.8511852575734",
          margin_mode: 0,
          allocated_margin: "0.000000",
        },
        {
          market_id: 1,
          symbol: "BTC",
          initial_margin_fraction: "20.00",
          open_order_count: 0,
          pending_order_count: 0,
          position_tied_order_count: 0,
          sign: 1,
          position: "0.00014",
          avg_entry_price: "102695.7",
          position_value: "14.332318",
          unrealized_pnl: "-0.045080",
          realized_pnl: "0.000000",
          liquidation_price: "68441.65312319259",
          margin_mode: 0,
          allocated_margin: "0.000000",
        },
      ],
      total_asset_value: "4.9844479999999995",
      cross_asset_value: "4.9844479999999995",
      shares: [],
    },
  ],
}

// Get account by index
// accountInstance.account(AccountByEnum.Index, ACCOUNT_INDEX.toString())

const accountByIndex = {
  code: 200,
  total: 1,
  accounts: [
    {
      code: 0,
      account_type: 0,
      index: 410044,
      l1_address: "0x0435b1aE398D3FD9035142d529B20dd0Cf722eD7",
      cancel_all_time: 0,
      total_order_count: 0,
      total_isolated_order_count: 0,
      pending_order_count: 0,
      available_balance: "0.111775",
      status: 1,
      collateral: "4.991915",
      account_index: 410044,
      name: "",
      description: "",
      can_invite: false,
      referral_points_percentage: "",
      positions: [
        {
          market_id: 0,
          symbol: "ETH",
          initial_margin_fraction: "20.00",
          open_order_count: 0,
          pending_order_count: 0,
          position_tied_order_count: 0,
          sign: 1,
          position: "0.0029",
          avg_entry_price: "3405.98",
          position_value: "9.907212",
          unrealized_pnl: "0.029870",
          realized_pnl: "0.000000",
          liquidation_price: "1788.1891162920563",
          margin_mode: 0,
          allocated_margin: "0.000000",
        },
        {
          market_id: 1,
          symbol: "BTC",
          initial_margin_fraction: "20.00",
          open_order_count: 0,
          pending_order_count: 0,
          position_tied_order_count: 0,
          sign: 1,
          position: "0.00014",
          avg_entry_price: "102695.7",
          position_value: "14.311038",
          unrealized_pnl: "-0.066360",
          realized_pnl: "0.000000",
          liquidation_price: "68496.96026604973",
          margin_mode: 0,
          allocated_margin: "0.000000",
        },
      ],
      total_asset_value: "4.955425",
      cross_asset_value: "4.955425",
      shares: [],
    },
  ],
}

// Get accounts by l1 address
// accountInstance.accountsByL1Address(L1_ADDRESS)

const accountsByL1Address = {
  code: 200,
  l1_address: "0x0435b1aE398D3FD9035142d529B20dd0Cf722eD7",
  sub_accounts: [
    {
      code: 0,
      account_type: 0,
      index: 410044,
      l1_address: "0x0435b1aE398D3FD9035142d529B20dd0Cf722eD7",
      cancel_all_time: 0,
      total_order_count: 0,
      total_isolated_order_count: 0,
      pending_order_count: 0,
      available_balance: "",
      status: 1,
      collateral: "4.991915",
    },
  ],
}

// Get API keys by account index
// accountInstance.apikeys(ACCOUNT_INDEX, 255)

const apikeys = {
  code: 200,
  api_keys: [
    {
      account_index: 410044,
      api_key_index: 0,
      nonce: 6,
      public_key:
        "94c2de591ca1e80a45f61830ea00ce1eb10bcb2a2e2343c13bd0ae5f8715f3e26d5a4c4ac6a9bd68",
    },
    {
      account_index: 410044,
      api_key_index: 3,
      nonce: 6,
      public_key:
        "530da586f7210ee2034e3206346e7718a9f1d724f166e93cd349c63e53feab4c462b00bf83fb6679",
    },
  ],
}
