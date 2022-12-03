import Routers from "./routes"
import { WagmiConfig, createClient,configureChains, defaultChains, Chain  } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const mumbaiChain: Chain = {
  id: 80001,
  name: 'Mumbai',
  network: 'Mumbai',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    default: 'https://rpc-mumbai.matic.today',
  },
  blockExplorers: {
    default: { name: 'polygonscan', url: 'https://mumbai.polygonscan.com/' },
  },
  testnet: true,
}
 
 
const { chains, provider } = configureChains([mumbaiChain], [publicProvider()])
const client = createClient({
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
})
 

const App = () => {
  return (
    <div className="App">
       <WagmiConfig client={client}>
      <Routers />
      </WagmiConfig>
    </div>
  )
}

export default App
