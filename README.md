# SoroCrew Docs & Landing Page

![SoroCrew Logo](./crew-logo-white.svg)

> **Official Documentation & Landing Page for SoroCrew** - The Soroban dApp Developer Environment on Stellar.

* **Live Documentation:** [https://crew-crew-fc59.vercel.app/](https://crew-crew-fc59.vercel.app/)
* **Live SoroCrew Studio:** [https://crew-studio-six.vercel.app/](https://crew-studio-six.vercel.app/)

Built with React, Vite, TypeScript, and a high-contrast Neo-Brutalist Black-on-White theme.

---

## Tutorial: Testing a Soroban Smart Contract dApp in SoroCrew Studio

A step-by-step developer guide for connecting and testing your frontend with Soroban smart contracts.

### Step 1: Launch SoroCrew Studio
Launch the local desktop environment or open the web runner:
```bash
git clone git@github.com:sorocrew/studio.git
cd studio
npm install
npm run dev
```

### Step 2: Configure `@sorocrew/provider` in Your dApp
Install the provider SDK into your Vite or Next.js frontend:
```bash
npm install @sorocrew/provider
```

Initialize wallet detection in your frontend code:
```typescript
import { isConnected, getPublicKey, signTransaction } from '@sorocrew/provider';

export async function connectWallet() {
  if (await isConnected()) {
    const pubKey = await getPublicKey();
    console.log('Connected account:', pubKey);
    return pubKey;
  }
  throw new Error('SoroCrew Studio provider not detected');
}
```

### Step 3: Switch Network Environment
Choose your desired Stellar runtime directly from the Studio header:
* **Local Standalone:** `http://localhost:8000` (Docker `stellar/quickstart`)
* **Stellar Testnet:** `https://soroban-testnet.stellar.org`
* **Stellar Futurenet:** `https://rpc-futurenet.stellar.org`

### Step 4: Fund Test Account via Friendbot
Use the 1-click Friendbot button in Studio or request funds via curl:
```bash
curl "https://friendbot.stellar.org?addr=<YOUR_PUBLIC_KEY>"
```

### Step 5: Simulate & Invoke Smart Contracts
Trigger transactions from your dApp UI. Studio intercepts signing calls, displays raw XDR parameters and authorization trees, and simulates contract state transitions without browser extension popups.

---

## Development

```bash
# Clone the repository
git clone git@github.com:sorocrew/docs.git
cd docs

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Contributing

All pull requests should target the `dev` branch. See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines and [DEVELOPMENT.md](./DEVELOPMENT.md) for local setup.

---

## License

MIT © [SoroCrew](https://github.com/sorocrew)
