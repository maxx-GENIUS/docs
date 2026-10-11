import React, { useState } from 'react';
import { 
  Globe, 
  Layers, 
  Activity, 
  FileCode, 
  Terminal, 
  Github, 
  ArrowRight, 
  Check, 
  Copy, 
  Zap, 
  Shield, 
  BookOpen, 
  ExternalLink,
  Cpu
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'studio' | 'provider' | 'quickstart' | 'tutorial'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-['Plus_Jakarta_Sans',sans-serif] flex flex-col">
      
      {/* Top Navbar */}
      <header className="border-b-4 border-black bg-white px-6 py-4 sticky top-0 z-50 shadow-[0_4px_0_0_#000000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white font-['Black_Ops_One'] text-2xl px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000000] rounded">
              CREW
            </div>
            <span className="font-['Black_Ops_One'] text-xl tracking-wider text-black hidden sm:inline">DOCS</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-extrabold rounded-lg border-2 border-black transition-all ${
                activeTab === 'overview' ? 'bg-blue-600 text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-white hover:bg-slate-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-3 py-1.5 text-xs font-extrabold rounded-lg border-2 border-black transition-all ${
                activeTab === 'studio' ? 'bg-blue-600 text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-white hover:bg-slate-100'
              }`}
            >
              Studio App
            </button>
            <button
              onClick={() => setActiveTab('provider')}
              className={`px-3 py-1.5 text-xs font-extrabold rounded-lg border-2 border-black transition-all ${
                activeTab === 'provider' ? 'bg-blue-600 text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-white hover:bg-slate-100'
              }`}
            >
              @sorocrew/provider
            </button>
            <button
              onClick={() => setActiveTab('quickstart')}
              className={`px-3 py-1.5 text-xs font-extrabold rounded-lg border-2 border-black transition-all ${
                activeTab === 'quickstart' ? 'bg-blue-600 text-white shadow-[2px_2px_0px_0px_#000]' : 'bg-white hover:bg-slate-100'
              }`}
            >
              @sorocrew/quickstart
            </button>

            <a
              href="https://t.me/sorocrew"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn py-1.5 px-3 text-xs bg-blue-100 text-blue-900 border-black"
            >
              <span>Telegram</span>
            </a>

            <a
              href="https://github.com/sorocrew"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn ml-1 py-1.5 px-3 text-xs bg-yellow-300"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-16">
        
        {/* OVERVIEW SECTION */}
        {activeTab === 'overview' && (
          <>
            {/* Hero Section */}
            <div className="border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[8px_8px_0px_0px_#000000] relative overflow-hidden">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 neo-badge bg-blue-100 text-blue-900 border-black">
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  <span>Stellar & Soroban Dev Environment</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-['Black_Ops_One'] tracking-wide text-black leading-tight">
                  SHIP SOROBAN dAPPS AT <span className="text-blue-600 underline underline-offset-8">WARP SPEED</span>
                </h1>

                <p className="text-lg text-slate-700 font-semibold leading-relaxed">
                  SoroCrew is a specialized developer environment tailored strictly for Web3 builders on Stellar. Embedded Horizon console, instant network toggling, live XDR decoding, and mock wallet injection.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://crew-studio-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary text-base py-3 px-6"
                  >
                    <span>Launch Studio Web App</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <a
                    href="https://github.com/sorocrew/studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn text-base py-3 px-6 bg-yellow-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="neo-card">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-2">Universal Network Toggler</h3>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                  Switch browser testing context instantly between Mainnet, Testnet, Futurenet, and local Standalone Docker on port 8000.
                </p>
              </div>

              <div className="neo-card">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-2">Embedded Horizon Console</h3>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                  Inspect block ledgers, monitor Soroban contract events, and parse raw XDR Base64 strings directly beside your dApp tab.
                </p>
              </div>

              <div className="neo-card">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-2">Mock Wallet SDK</h3>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                  Injected <code className="bg-slate-100 px-1 border border-black font-mono">window.stellar</code> & <code className="bg-slate-100 px-1 border border-black font-mono">window.freighter</code> provider to test signing without extension popups.
                </p>
              </div>

            </div>

            {/* Quick Install Section */}
            <div className="border-4 border-black bg-white p-8 rounded-xl shadow-[6px_6px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-blue-600" />
                <span>Quick Installation</span>
              </h2>

              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="block text-xs font-bold text-slate-500 mb-1">1. Install Provider SDK:</span>
                  <div className="bg-slate-900 text-emerald-400 p-3 rounded-lg border-2 border-black flex items-center justify-between">
                    <code>npm install @sorocrew/provider</code>
                    <button onClick={() => copyCode('npm install @sorocrew/provider', 'p1')} className="p-1 hover:bg-slate-800 rounded">
                      {copiedCode === 'p1' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-slate-500 mb-1">2. Run Local Soroban Docker:</span>
                  <div className="bg-slate-900 text-blue-300 p-3 rounded-lg border-2 border-black flex items-center justify-between">
                    <code>npx @sorocrew/quickstart start</code>
                    <button onClick={() => copyCode('npx @sorocrew/quickstart start', 'p2')} className="p-1 hover:bg-slate-800 rounded">
                      {copiedCode === 'p2' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* STUDIO SECTION */}
        {activeTab === 'studio' && (
          <div className="border-4 border-black bg-white p-8 rounded-xl shadow-[6px_6px_0px_0px_#000] space-y-6">
            <h2 className="text-3xl font-['Black_Ops_One'] text-black">SOROCREW STUDIO</h2>
            <p className="text-base text-slate-700 font-medium">
              The primary desktop app runner. Built with Tauri 2.0 (Rust) and React + Vite. Features a split-screen workspace allowing you to render your local dApp frontend on the left while monitoring Soroban contract state on the right.
            </p>

            <div className="bg-slate-100 p-4 border-2 border-black rounded-lg space-y-2 font-mono text-xs">
              <div className="font-bold text-black">CLI Build Command:</div>
              <pre className="bg-slate-900 text-white p-3 rounded border border-black">
                git clone git@github.com:sorocrew/studio.git{"\n"}
                cd studio{"\n"}
                npm install{"\n"}
                npm run dev
              </pre>
            </div>
          </div>
        )}

        {/* PROVIDER SECTION */}
        {activeTab === 'provider' && (
          <div className="border-4 border-black bg-white p-8 rounded-xl shadow-[6px_6px_0px_0px_#000] space-y-6">
            <h2 className="text-3xl font-['Black_Ops_One'] text-black">@SOROCREW/PROVIDER</h2>
            <p className="text-base text-slate-700 font-medium">
              The lightweight TypeScript library injected into dApp frames to mock Freighter wallet signatures and handle bidirectional event messaging with SoroCrew Studio.
            </p>

            <pre className="bg-slate-900 text-emerald-400 p-4 rounded-lg border-2 border-black font-mono text-xs overflow-x-auto">
{`import { isConnected, getPublicKey, getNetwork } from '@sorocrew/provider';

// Access injected provider
const connected = await isConnected();
const publicKey = await getPublicKey();
const network = await getNetwork();

console.log({ connected, publicKey, network });`}
            </pre>
          </div>
        )}

        {/* QUICKSTART SECTION */}
        {activeTab === 'quickstart' && (
          <div className="border-4 border-black bg-white p-8 rounded-xl shadow-[6px_6px_0px_0px_#000] space-y-6">
            <h2 className="text-3xl font-['Black_Ops_One'] text-black">@SOROCREW/QUICKSTART</h2>
            <p className="text-base text-slate-700 font-medium">
              Automated Docker Compose orchestrator for spinning up <code className="bg-slate-100 px-1 border border-black">stellar/quickstart:testing</code> standalone nodes locally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              <div className="neo-card p-4">
                <span className="font-bold block mb-1">Horizon REST Endpoint</span>
                <code className="text-blue-600">http://localhost:8000</code>
              </div>
              <div className="neo-card p-4">
                <span className="font-bold block mb-1">Soroban RPC Endpoint</span>
                <code className="text-blue-600">http://localhost:8000/soroban/rpc</code>
              </div>
            </div>
          </div>
        )}

        {/* TUTORIAL SECTION */}
        {activeTab === 'tutorial' && (
          <div className="border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[8px_8px_0px_0px_#000000] space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 neo-badge bg-emerald-100 text-emerald-900 border-black mb-3">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>Developer Guide</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-['Black_Ops_One'] text-black">
                TESTING SOROBAN dAPPS IN SOROCREW STUDIO
              </h2>
              <p className="text-slate-700 font-semibold mt-2 text-base">
                A complete 5-step walkthrough to connect your frontend, switch networks, fund test accounts, and simulate smart contract calls in seconds.
              </p>
            </div>

            {/* Step 1 */}
            <div className="border-2 border-black p-6 rounded-xl bg-slate-50 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-['Black_Ops_One'] flex items-center justify-center border-2 border-black">
                  1
                </span>
                <h3 className="text-xl font-black">Launch SoroCrew Studio</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Clone and launch the desktop runner or visit the web companion at <code className="bg-white px-2 py-0.5 border border-black font-mono">https://crew-studio-six.vercel.app</code>.
              </p>
              <div className="bg-slate-900 text-emerald-400 p-3 rounded-lg border-2 border-black font-mono text-xs">
                <code>git clone git@github.com:sorocrew/studio.git &amp;&amp; cd studio &amp;&amp; npm install &amp;&amp; npm run dev</code>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-2 border-black p-6 rounded-xl bg-slate-50 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-yellow-400 text-black font-['Black_Ops_One'] flex items-center justify-center border-2 border-black">
                  2
                </span>
                <h3 className="text-xl font-black">Configure @sorocrew/provider in Your dApp</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Install the provider SDK into your React / Next.js / Vite project to communicate with Studio's injected frame.
              </p>
              <div className="bg-slate-900 text-emerald-400 p-4 rounded-lg border-2 border-black font-mono text-xs overflow-x-auto">
{// src/lib/stellar.ts
import { isConnected, getPublicKey, signTransaction } from '@sorocrew/provider';

export async function connectWallet() {
  if (await isConnected()) {
    const pubKey = await getPublicKey();
    console.log('Connected account:', pubKey);
    return pubKey;
  }
  throw new Error('SoroCrew Studio provider not detected');
}}
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-2 border-black p-6 rounded-xl bg-slate-50 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white font-['Black_Ops_One'] flex items-center justify-center border-2 border-black">
                  3
                </span>
                <h3 className="text-xl font-black">Switch Network Environment</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Use the top network dropdown inside Studio to select your target runtime:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-white border-2 border-black rounded-lg">
                  <span className="font-black text-blue-600 block mb-1">Local Standalone</span>
                  <code>http://localhost:8000</code>
                </div>
                <div className="p-3 bg-white border-2 border-black rounded-lg">
                  <span className="font-black text-emerald-600 block mb-1">Stellar Testnet</span>
                  <code>soroban-testnet.stellar.org</code>
                </div>
                <div className="p-3 bg-white border-2 border-black rounded-lg">
                  <span className="font-black text-purple-600 block mb-1">Futurenet</span>
                  <code>rpc-futurenet.stellar.org</code>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-2 border-black p-6 rounded-xl bg-slate-50 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-600 text-white font-['Black_Ops_One'] flex items-center justify-center border-2 border-black">
                  4
                </span>
                <h3 className="text-xl font-black">Fund Account with Friendbot</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Studio provides a 1-click Friendbot faucet button to credit your mock keypair with 10,000 test XLM instantly on Testnet or Futurenet.
              </p>
              <div className="bg-slate-900 text-blue-300 p-3 rounded-lg border-2 border-black font-mono text-xs">
                <code>curl "https://friendbot.stellar.org?addr=&lt;YOUR_PUBLIC_KEY&gt;"</code>
              </div>
            </div>

            {/* Step 5 */}
            <div className="border-2 border-black p-6 rounded-xl bg-slate-50 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-rose-500 text-white font-['Black_Ops_One'] flex items-center justify-center border-2 border-black">
                  5
                </span>
                <h3 className="text-xl font-black">Simulate &amp; Invoke Contract Calls</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Trigger contract transactions from your frontend. Studio intercepts transaction signing requests, allowing you to preview XDR payloads, inspect Soroban auth trees, and confirm simulations without browser extension popups.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white px-6 py-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-['Black_Ops_One'] px-2 py-0.5 border border-black rounded">
              CREW
            </div>
            <span>© 2026 SoroCrew — Open Source Web3 Developer Tools</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://t.me/sorocrew" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">Telegram</a>
            <a href="https://github.com/sorocrew/studio" target="_blank" rel="noopener noreferrer" className="hover:underline">Studio</a>
            <a href="https://github.com/sorocrew/provider" target="_blank" rel="noopener noreferrer" className="hover:underline">Provider</a>
            <a href="https://github.com/sorocrew/quickstart" target="_blank" rel="noopener noreferrer" className="hover:underline">Quickstart</a>
            <a href="https://github.com/sorocrew/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">Docs</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
