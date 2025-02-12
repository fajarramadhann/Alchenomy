import { useEffect } from 'react';
import world from "./assets/world.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

function Home() {
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      navigate('/dashboard');
    }
  }, [isConnected, navigate]);

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
        <div className="px-8 py-3 z-50">
        {!isConnected && (
            <ConnectButton
              showBalance={false}
              chainStatus="none"
              accountStatus="address"
            />
          )}
        </div>
        <img src={world} className='absolute bottom-0 w-[50em]' alt="World" />
        <div className='absolute bottom-0 w-80 h-80 bg-blue-300/50 rounded-full blur-3xl'></div>
      </div>
    </>
  );
}

export default Home;