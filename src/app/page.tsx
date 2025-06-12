'use client'
import ContactForm from './components/contact-form/ContactForm';
import MusicPlayer from './components/music-player/MusicPlayer'

export default function Home() {
  return (
  <div className="font-comic bg-[url('/boot_cactus_composite.png')] bg-[length:125px_80px] bg-repeat p-20 h-screen bg-white">
<div className='flex'>
  <div className="text-black bg-white w-[400px] ml-40 p-8">
    <div className='bg-white h-25 relative'>
      <h1 className="text-green-500 text-[2rem] absolute">Music For Filling Gas Staitons</h1>
      <h1 className="text-[2rem] text-yellow-300  absolute ml-[.1rem] -mt-[.1rem]">Music For Filling Gas Staitons</h1>
      <h1 className="text-red-500 text-[2rem] absolute ml-[.15rem] -mt-[.15rem]">Music For Filling Gas Staitons</h1>
  </div>
<div>if you are like me you must drive a car to commute towork or around town for various purposes such asbuying food to LIVE or visiting the HOSPITALb8t a major probem i have run into lately is this:why does the gas station music have to be so BAD?here me out…what if someone made music FOR gas stations and gaspumps and not let them play some lousy playlist? OK. sohere is what i have done. i made music for gas stationsi would like to petition wawa to play this album sopeople can hear gas intended music</div>
  <ContactForm/>
  </div>
  <MusicPlayer className=""/>
  </div>
  </div>
  );
}
