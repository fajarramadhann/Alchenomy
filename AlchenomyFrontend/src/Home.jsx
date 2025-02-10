import { useState } from 'react'
import world from "./assets/world.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <header className="bg-[#00101D] text-white my-5 p-4 fixed rounded-2xl z-[99] left-10 right-10">
          <div className="text-xl font-semibold">⭐ Alc.</div>
        </header>
      </div>
      <div className='text-center flex flex-col h-screen justify-center items-center gap-4 bg-[#EEEEEE]'>
        <h1 className='font-heading text-4xl md:text-6xl font-bold text-center md:w-[20em] w-[10em] text-[#343434]'>Protecting Your Rupiah's Value in an Unstable Economy.</h1>
        <h1 className='font-body text-xl w-96'>Secure your assets and stay ahead of market volatility with AI-driven stablecoin solutions.</h1>
        <button className='px-8 py-3 bg-blue-600 rounded-full font-body text-white z-50'>Connect Wallet</button>
        <img src={world} className='absolute bottom-0 w-[50em]' />
        <div className='absolute bottom-0 w-80 h-80 bg-blue-300/50 rounded-full blur-3xl'></div>
      </div>
    </>
  )
}

export default App
