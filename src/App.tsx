function App() {
  return (
    <>
      <main className="container mx-auto p-4 mt-2 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Mikhail "Mike" Khoroshun</h1>
        <p className="text-muted-foreground text-lg font-mono">
        Designer-Engineer with 15+ years of experience crafting clean, intuitive, and high-performance user experiences at scale. Blends strong engineering fundamentals with a deep eye for design, turning complex systems into simple, elegant interfaces.
        </p>
      </main>
      <div className="container mx-auto p-4 mt-2">
        <p className="font-mono font-bold text-lg mb-2"><a href="https://sx.bet/" target="_blank" rel="noopener noreferrer" className="underline">01. SX Bet</a></p>
        <p className="text-muted-foreground mb-4 font-mono">
          SX Bet is the largest decentralized sports betting platform in the world, with $1B+ in volume.
        </p>
        <div className="rounded-3xl overflow-hidden bg-muted-foreground/20 p-5 mb-5">
          <img src="/assets/sxbet.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="rounded-3xl overflow-hidden bg-muted-foreground/20 p-5 mb-5">
          <img src="/assets/before-after.jpg" alt="SX Bet" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="flex flex-row gap-4 bg-muted-foreground/20 p-5 rounded-3xl items-center">
          <div className="flex flex-col gap-2">
            <img src="/assets/betslip1.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <img src="/assets/betslip2.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
            <img src="/assets/success.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-2">
        <p className="font-mono font-bold text-lg mb-2"><a href="https://nx-e.vercel.app/?market=regular" target="_blank" rel="noopener noreferrer" className="underline">02. Nature's Ledger Exchange</a> (Beta)</p>
        <p className="text-muted-foreground mb-4 font-mono">
          XRPL powered crypto exchange with a focus on simplicity and efficiency.
        </p>
        <div className="rounded-3xl overflow-hidden bg-muted-foreground/20 p-5 mb-5">
          <img src="/assets/nx.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="rounded-3xl overflow-hidden bg-muted-foreground/20 p-5 mb-5">
          <img src="/assets/nx2.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="flex flex-row gap-4 bg-muted-foreground/20 p-5 rounded-3xl items-center">
          <div className="flex flex-col gap-2">
            <img src="/assets/nx-thumb.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <img src="/assets/nx-thumb2.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden bg-muted-foreground/20 p-5 mb-5">
          <img src="/assets/nx3.png" alt="SX Bet" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </>
  )
}

export default App
