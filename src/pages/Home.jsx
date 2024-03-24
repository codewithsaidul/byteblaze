import Hero from '../components/Hero'
import Wave from '../assets/wave.svg'
const Home = () => {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-[calc(100vh-116px)]">
      <Hero />

      <img className='absolute bottom-0 w-full' src={Wave} alt="wave image" />
    </div>
  );
}

export default Home